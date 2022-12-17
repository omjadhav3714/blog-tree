import React, { useState } from 'react'
import { firestore, fromMillis } from '../../services/firebase';
import dynamic from 'next/dynamic';
const RecentPostCard = dynamic(() => import('./RecentPostCard'))

const LIMIT = 4;

export default function PostWidget({ posts }) {
    const [data, setData] = useState(posts);
    const [loading, setLoading] = useState(false);
    const [postsEnd, setDataEnd] = useState(false);

    const getMorePosts = async () => {
        setLoading(true);
        const last = data[data.length - 1];
        const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;
        const query = firestore
            .collectionGroup('posts')
            .where('published', '==', true)
            .orderBy('createdAt', 'desc')
            .startAfter(cursor)
            .limit(LIMIT);
        const newData = (await query.get()).docs.map((doc) => doc.data());
        setData(data.concat(newData));
        setLoading(false);
        if (newData.length < LIMIT) {
            setDataEnd(true);
        }
    };
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Recent Posts</h3>
            <RecentPostCard posts={data} />
            {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}
            {/* <Loader show={loading} /> */}
            {postsEnd && 'You have reached the end!'}
        </div>
    )
}
