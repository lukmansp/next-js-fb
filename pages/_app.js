import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import '../styles/layout.css'
import Head from 'next/head'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import '../components/layout/navbar.css'
import Navbar from '../components/layout/navbar'
import { SessionProvider } from 'next-auth/react'

const theme = {
  colors: {
    primary: '#355C7D',
  }
}

function MyApp({ Component, pageProps: pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component{...pageProps}/>)
  }
  console.log('ini dari index', pageProps.session)
  return (
    <>
    <SessionProvider session={pageProps.session}>
    <Head>
        <title>next menunya</title>
        <meta name="description" content="lagi nyoba kkwk"/>
    </Head>
    <Navbar session={pageProps.session}/>
    <Header/>
     <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
    <Footer/>
    </SessionProvider>
    </>
  )
}

export default MyApp
