import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-center lg:text-left">
            <div className="text-gray-200 text-center p-4">
                © 2022 Copyright :
                <Link className="text-gray-200" href="/"> Maitri Jhadanshi</Link>
            </div>
        </footer>
    )
}

export default Footer