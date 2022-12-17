import React from 'react'
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Loading from '../../pages/loading';

export default function PostCardItem({ post }) {
    const wordCount = post?.content.trim().split(/\s+/g).length;
    const minutesToRead = (wordCount / 100 + 1).toFixed(0);

    return (
        <div className='bg-white rounded-lg'>
            <div className="container lg:px-2 lg:py-12 py-3 px-3 mx-auto" style={{ 'cursor': 'auto' }}>
                <div className="lg:w-11/12 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
                        <Image
                            alt={post.title}
                            layout="fill"
                            objectFit='cover'
                            src={post.thumbnailURL}
                            style={{ 'cursor': 'auto' }}
                            unoptimized={true}
                            loading='lazy'
                            loader={<Loading />}
                        />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 p-4 mt-6 lg:mt-0" style={{ 'cursor': 'auto' }}>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{ 'cursor': 'auto' }}>{post.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="text-gray-600 ml-3">Approx. {minutesToRead} min read</span>
                            </span>

                        </div>
                        <p className="leading-relaxed text-justify">
                            <ReactMarkdown>
                                {post.content.replace(/!\[(.*?)\]\((.*?)\)/g, '').substring(0, 250) + '...'}
                            </ReactMarkdown>
                        </p>

                        <div className="flex pt-2">
                            <span className='flex justify-end ml-2 font-medium text-lg'>❤️ {post.likes || 0} likes</span>

                            <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                                <Link href={`/post/${post.username}/${post.slug}`}>Read More </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
