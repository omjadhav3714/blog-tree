import React from 'react'
import Link from 'next/link';
import moment from 'moment'

const BlogContent = ({ post }) => {
    console.log(post);
    return (
        <div className=" shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featuredImage.url} alt={post.title}
                    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-green-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <h4 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-green-600 text-3xl font-semibold">
                 <p> {post.content.raw}</p>  
            </h4>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img src={post.author.photo.url} alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {post.excerpt}
            </p>
            <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pt-5 flex flex-col items-center 
              justify-center w-full">
              <p className="font-bold text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
              Post Your Comments!
            </p>
            <form  className="w-full max-w-lg items-center justify-center text-center">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Comment
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    <input type="submit" className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" />
        
                    </div>
                </div>
            </form>
            </div>
            </div>
      
    )
}

export default BlogContent