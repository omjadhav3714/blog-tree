import React from 'react'
import { UserContext } from '../services/context'
import { useContext } from 'react'
import { Link as LinkScroll } from 'react-scroll'

function MainBody() {
    const { username } = useContext(UserContext)

    return (
        <>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block text-green-900 xl:inline">नमस्कार </span>{' '}
                        <span className="block text-green-600 capitalize xl:inline">{username}</span>
                    </h1>
                    <br />
                    <span className="mt-3 text-base text-green-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    वाचा रोज झाडांन विषयी नवीन लेख.
                    </span>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <LinkScroll
                                to="blogs"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-100 bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                            >
                                Read Blogs
                            </LinkScroll>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default MainBody