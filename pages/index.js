import Hero from './../components/Hero'
import Cards from '../components/Cards'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'

const posts = [
  { title: 'Heelooo', excerpt: 'tesr' },
  { title: 'Heelooo', excerpt: 'tesr' },
]
const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => (
              <div>
                <PostCard post={post} />
                {/* {post.title} */}
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
