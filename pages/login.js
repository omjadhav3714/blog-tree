import { UserContext } from "../services/context";
import { useContext } from "react";
import { motion } from 'framer-motion'
import dynamic from "next/dynamic";
const UserFormSection = dynamic(() => import('../components/auth/UserFormSection'))
const SignOutSection = dynamic(() => import('../components/auth/SignOutSection'))
const SignUpSection = dynamic(() => import('../components/auth/SignUpSection'))
const Header = dynamic(() => import('../components/Header'))

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
