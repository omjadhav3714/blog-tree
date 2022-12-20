import { auth, googleAuthProvider } from "../../services/firebase";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import loginAnimationData from "../assets/loginLottie";

const SignUpSection = () => {
    const loginDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleAuthProvider);
            toast.success('Signed in with Google');
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="lg:w-96 md:w-96 sm:w-24 shadow-xl rounded p-5">
                <h1 className="text-3xl text-center text-green-900 font-medium">Welcome to Blog Tree</h1>
                <br />
                <div>
                    <Lottie
                        options={loginDefaultOptions}
                    />
                </div>
                <br />
                <button className="text-center w-full bg-green-400 rounded-md text-white py-3 font-medium" onClick={signInWithGoogle}> Sign In with Google</button>
            </div>
        </div>

    )
}

export default SignUpSection;