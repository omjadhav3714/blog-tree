import { UserContext } from "../services/context";
import { useContext } from "react";
import { motion } from 'framer-motion'
import dynamic from "next/dynamic";
const UserFormSection = dynamic(() => import('../components/auth/UserFormSection'), { suspense: true })
const SignOutSection = dynamic(() => import('../components/auth/SignOutSection'), { suspense: true })
const SignUpSection = dynamic(() => import('../components/auth/SignUpSection'), { suspense: true })
const Header = dynamic(() => import('../components/Header'), { suspense: true })
const SEOHead = dynamic(() => import('../components/SEOHead'), { suspense: true })

const login = (props) => {

    const { user, username } = useContext(UserContext);

    return (
        <>
            <SEOHead
                pageTitle='Login'
                description='Login to MaitriJhadanashi'
            />
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
        </>
    )
}

export default login
