import React, {useState, useEffect, useContext, useCallback } from "react";
import Lottie from "react-lottie";
import { firestore } from "../../services/firebase";
import toast from "react-hot-toast";
import debounce from "lodash.debounce";
import { UserContext } from "../../services/context";
import chooseUserNameAnimationData from "../assets/choose";

const UserFormSection = () => {
    const chooseUserNameDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: chooseUserNameAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, username } = useContext(UserContext);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const userDoc = firestore.doc(`users/${user.uid}`);
            const usernameDoc = firestore.doc(`usernames/${formValue}`);

            const batch = firestore.batch();
            batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName, email: user.email });
            batch.set(usernameDoc, { uid: user.uid });

            await batch.commit();

            toast.success('Username created');

        } catch (error) {
            toast.error(error);
        }

    };

    const onChange = (e) => {
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
        }

        if (re.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
        }
    };

    useEffect(() => {
        checkUsername(formValue);
    }, [formValue]);

    const checkUsername = useCallback(
        debounce(async (username) => {
            if (username.length >= 3) {
                const ref = firestore.doc(`usernames/${username}`);
                const { exists } = await ref.get();
                setIsValid(!exists);
                setLoading(false);
            }
        }, 500),
        []
    );

    return (
        !username && (
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="lg:w-96 md:w-96  sm:w-24 shadow-xl rounded p-5">
                    <h1 className="text-3xl text-green-900 font-medium">Choose Username</h1>
                    <br />
                    <div>
                        <Lottie
                            options={chooseUserNameDefaultOptions}
                        />
                    </div>
                    <br />
                    <form className="space-y-5 mt-5" onSubmit={onSubmit}>
                        <input
                            type="text"
                            className="w-full h-12 border border-gray-800 rounded px-3"
                            value={formValue}
                            onChange={onChange}
                            placeholder="Enter username" />
                        <UsernameMessage
                            username={formValue}
                            isValid={isValid}
                            loading={loading} />
                        <button
                            className="text-center w-full bg-green-400 rounded-md text-white py-3 font-medium"
                            disabled={!isValid}>
                            Choose name
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

export default UserFormSection;

function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
        return <p>Checking...</p>;
    } else if (isValid) {
        return <p className="text-success">{username} is available!</p>;
    } else if (username && !isValid) {
        return <p className="text-danger">That username is taken!</p>;
    } else {
        return <p></p>;
    }
}