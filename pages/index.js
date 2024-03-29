import { firestore, postToJSON, fromMillis } from '../services/firebase'
import React, { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const PostWidget = dynamic(() => import('../components/posts/PostWidget'), { suspense: true })
const VerticalPostCard = dynamic(() => import('../components/posts/VerticalPostCard'), { suspense: true })
const Loader = dynamic(() => import('../components/Loader'), { suspense: true })
const FeaturedPosts = dynamic(() => import('../sections/FeaturedPosts'), { suspense: true })
const Hero = dynamic(() => import('./../components/Hero'), { suspense: true })
const Loading = dynamic(() => import('./loading'), { suspense: true })
const SEOHead = dynamic(() => import('../components/SEOHead'), { suspense: true })

const LIMIT = 4;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT);
  const posts = (await postsQuery.get()).docs.map(postToJSON);

  const featuredPostsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .where('featured', '==', true)
    .orderBy('createdAt', 'desc')
  const featuredPosts = (await featuredPostsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts, featuredPosts },
  };
}


export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];
    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;
    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);
    const newPosts = (await query.get()).docs.map((doc) => doc.data());
    setPosts(posts.concat(newPosts));
    setLoading(false);
    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };
  return (
    <>
      <SEOHead
        pageTitle='Home'
        description='Read fresh and new blogs related to trees.'
      />
      <Suspense fallback={<Loading />}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <div className="container mx-auto px-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 col-span-1">
                <FeaturedPosts posts={props.featuredPosts} />
              </div>
              <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                  <PostWidget posts={posts} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pt-8">
              <VerticalPostCard posts={posts} />
            </div>
            {!loading && !postsEnd && <div className="pt-4"><button className='bg-white text-green-900 rounded-lg p-2' onClick={getMorePosts}>Load more</button></div>}
            <Loader show={loading} />
            {postsEnd && <span className="text-green-900">You have reached the end!</span>}
          </div>
        </motion.div>
      </Suspense>
    </>
  )
}