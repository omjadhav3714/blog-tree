import React from 'react';
import Lottie from 'react-lottie';
import loadingAnimationData from '../components/assets/loading';

const Loader = ({ show }) => {
    const loadingDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        show ?
            (<div className="text-center">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md  transition ease-in-out duration-150 cursor-not-allowed"
                    disabled
                >
                    <Lottie
                        options={loadingDefaultOptions}
                    />
                </button>
            </div>)
            : null
    )
}

export default Loader;