import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import moment from 'moment';

export default function RecentPostCard({ posts }) {
    return posts ? posts.map((post) => <RecentPostCardItem post={post} key={post.slug} />) : null;
}

function RecentPostCardItem({ post }) {
    return (
        <div className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
                <Image
                    unoptimized
                    alt={post.title}
                    height="60"
                    width="60"
                    className="align-middle rounded-full"
                    src={post.authorImage}
                    loading="lazy"
                />
            </div>
            <div className="flex-grow ml-4">
                <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                <Link href={`/post/${post.username}/${post.slug}`} className="text-md">{post.title}</Link>
            </div>
        </div>
    )
}
