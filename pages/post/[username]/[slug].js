import React from 'react'
import Author from '../../../components/posts/Author';
import PostDetail from '../../../components/posts/PostDetail';
import { getUserWithUsername, postToJSON, firestore } from '../../../services/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import SocialShare from '../../../components/posts/SocialShare';
import Header from '../../../components/Header';
import { motion } from 'framer-motion'


export async function getStaticProps({ params }) {
    const { username, slug } = params;
    const userDoc = await getUserWithUsername(username);
    let post;
    let path;
    if (userDoc) {
        const postRef = userDoc.ref.collection('posts').doc(slug);
        post = postToJSON(await postRef.get());
        path = postRef.path;
    }
    return {
        props: { post, path },
        revalidate: 2000,
    };
}

export async function getStaticPaths() {
    const snapshot = await firestore.collectionGroup('posts').get();
    const paths = snapshot.docs.map((doc) => {
        const { slug, username } = doc.data();
        return {
            params: { username, slug },
        }
    });
    return {
        paths,
        fallback: 'blocking',
    };
}

export default function Post(props) {
    const postRef = firestore.doc(props.path);
    const [realtimePost] = useDocumentData(postRef);
    const post = realtimePost || props.post;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10">
                        <Header />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8 pt-5">
                        <PostDetail post={post} postRef={postRef} />
                        <Author post={post} />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
