import { auth } from "../../services/firebase";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import logoutAnimationData from "../assets/logout";

const SignOutSection = () => {
    const logoutDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logoutAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const signOut = async () => {
        try {
            await auth.signOut();
            toast.success('Signed out');
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="lg:w-96 md:w-96  sm:w-24 shadow-xl rounded p-5">
                <h1 className="text-3xl text-white font-medium">Are you sure ?</h1>
                <br />
                <div>
                    <Lottie
                        options={logoutDefaultOptions}
                    />
                </div>
                <br />
                <button className="text-center w-full bg-red-400 rounded-md text-white py-3 font-medium" onClick={signOut}> Sign Out</button>
            </div>
        </div>
    )
}

export default SignOutSection;