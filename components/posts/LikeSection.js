import React from 'react'
import AuthCheck from '../auth/AuthCheck'
import LikeButton from './LikeButton'
import Link from 'next/link'

export default function LikeSection({postRef}) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Like</h3>
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
    )
}
