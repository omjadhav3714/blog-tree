import styles from '../styles/header.module.css';
import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../services/context';
import { auth } from '../services/firebase';
import Image from 'next/image';

function Header() {
    const { username } = useContext(UserContext);

    const router = useRouter();

    const signOut = () => {
        auth.signOut();
        router.reload();
    }
    return (
        <>
            <Popover>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/">
                                    <span className="sr-only">Blog tree</span>
                                    <div className='relative h-8 w-auto sm:h-10'>
                                        <Image
                                            height="30"
                                            width="30"
                                            alt="Blog tree"
                                            src="/logo.png"
                                            unoptimized={true}
                                        />
                                    </div>
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 overflow-hidden">
                            <Link
                                href="/"
                                className={styles.headbut}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={styles.headbut}
                            >
                                About
                            </Link>

                            {username && (
                                <div className='md:inline md:space-x-6'>
                                    <button onClick={signOut} className="btn bg-red-400 p-2 rounded text-white" >Log Out</button>
                                </div>
                            )}

                            {!username && (
                                <Link href="/login" className={styles.headbut}>Log in</Link>
                            )}

                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/logo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-100">
                                        <span className="sr-only">Close main menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link
                                    href="/"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900 "
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/about"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900"
                                >
                                    About
                                </Link>
                                {username && (
                                    <div className='block px-3 py-2 rounded-md text-base font-medium '>
                                        <button onClick={signOut} className="btn bg-red-400 p-2 rounded text-white" >Log Out</button>
                                    </div>
                                )}

                                {!username && (
                                    <Link href="/login" className='block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-900 hover:bg-gray-50'>Log in</Link>
                                )}
                            </div>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}
export default Header