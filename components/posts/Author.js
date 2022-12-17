import React from 'react';
import Image from 'next/image';

const Author = ({ post }) => (
    <div className="text-center flex items-center justify-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute -top-14">
            <Image
                alt={post.name}
                height="100"
                width="100"
                className="align-middle rounded-full"
                src={post.authorImage}
                unoptimized={true}
                loading="lazy"
            />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{post.username}</h3>
    </div>
);

export default Author;