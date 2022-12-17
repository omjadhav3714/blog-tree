import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dynamic from 'next/dynamic'
const PostCardItem = dynamic(() => import('../components/posts/PostCard'))

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 1,
    },
    midlap: {
        breakpoint: { max: 1300, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const FeaturedPosts = ({ posts }) => {
    return (
        <div className="mb-8" id='blogs'>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                swipeable={true}
                infinite={true}
                showDots={true}
                ssr={true}
                arrows={false}
            >
                {posts ? posts.map((post) => <PostCardItem post={post} key={post.slug} />) : null}
            </Carousel>
        </div>
    );
};

export default FeaturedPosts;