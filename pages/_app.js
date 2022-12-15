import Footer from '../components/Footer'
import '../styles/globals.scss'
import { useUserData } from '../services/hooks'
import { UserContext } from '../services/context';


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
