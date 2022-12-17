const Section = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="/about_trees.jpg"
                            alt="About Us"
                        />
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:pl-auto mt-24 pl-12">

                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <div> <span className="block xl:inline"> मैत्री झाडांशी</span>{' '}</div>
                        <span className="block text-green-600 xl:inline">About</span>
                    </h1>
                    <span className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur omnis, velit impedit necessitatibus, eum quibusdam eaque ipsum similique dolore quidem voluptatum sequi quae adipisci totam magnam! Mollitia, nostrum fugiat!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Section