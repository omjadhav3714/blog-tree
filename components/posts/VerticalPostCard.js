import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export default function VerticalPostCard({ posts }) {
    return posts ? posts.map((post) => <VerticalPostCardItem post={post} key={post.slug} />) : null;
}

function VerticalPostCardItem({ post }) {
    return (
        <div className="relative h-72">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.thumbnailURL}')` }} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
                <span className='flex justify-end ml-2 font-medium text-lg text-white'>❤️ {post.likes || 0} likes</span>

                <div className="flex items-center absolute bottom-5 w-full justify-center">
                    <Image
                        alt={post.username}
                        height="30"
                        width="30"
                        className="align-middle drop-shadow-lg rounded-full"
                        src={post.authorImage}
                        unoptimized={true}
                        loading="lazy"
                    />
                    <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.username}</p>

                </div>
            </div>
            <Link href={`/post/${post.username}/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
        </div>
    )
}

