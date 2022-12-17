import '../styles/globals.scss'
import { useUserData } from '../services/hooks'
import { UserContext } from '../services/context';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('../components/Footer'), { suspense: true })


function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
      <Footer />
    </UserContext.Provider>
  )
}

export default MyApp
