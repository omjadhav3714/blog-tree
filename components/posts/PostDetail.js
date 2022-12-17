import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic'
const LikeButton = dynamic(() => import('./LikeButton'))
const AuthCheck = dynamic(() => import('../auth/AuthCheck'))

const PostDetail = ({ post, postRef }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
                            <Image
                                alt={post.username}
                                height="30"
                                width="30"
                                className="align-middle rounded-full"
                                src={post.authorImage}
                                unoptimized={true}
                                loading='lazy'
                            />
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.username}</p>
                        </div>
                        <div className="font-medium text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>

                        </div>
                    </div>
                    <span className='flex justify-end ml-2 font-medium text-lg'>❤️ {post.likes || 0} likes</span>
                    <h1 className="mb-8 text-3xl font-semibold pt-3">{post.title}</h1>
                    <div className='text-justify'>

                        <ReactMarkdown>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="pt-4 flex justify-center">

                    <AuthCheck
                        fallback={
                            <Link href="/login">
                                <button>❤️ Login</button>
                            </Link>
                        }
                    >
                        <LikeButton postRef={postRef} />
                    </AuthCheck>
                </div>
            </div>

        </>
    );
};

export default PostDetail;