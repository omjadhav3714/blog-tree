import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-center lg:text-left">
            <div className="text-green-900 text-center p-4">
                © 2022 Copyright :
                <Link className="text-green-900" href="/"> Maitri Jhadanshi</Link>
            </div>
        </footer>
    )
}

export default Footer