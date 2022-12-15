import { UserContext } from "../services/context";
import { useContext } from "react";
import Header from "../components/Header";
import { motion } from 'framer-motion'
import UserFormSection from "../components/auth/UserFormSection";
import SignOutSection from "../components/auth/SignOutSection";
import SignUpSection from "../components/auth/SignUpSection";


const login = (props) => {

    const { user, username } = useContext(UserContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10">
                    <Header />
                </div>
            </div>
            {user ?
                !username ? <UserFormSection /> : <SignOutSection />
                :
                <SignUpSection />
            }
        </motion.div>
    )
}

export default login
