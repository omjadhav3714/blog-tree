import Lottie from 'react-lottie'
import animationData from './assets/tree'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'))
const MainBody = dynamic(() => import('./MainBody'))

function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Header />
                        <MainBody />
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

                    <Lottie
                        tw="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        options={defaultOptions}
                    />
                </div>
            </div>

        </>
    )
}

export default Hero;