import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import '../styles/layout.css'
import Head from 'next/head'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

const theme = {
  colors: {
    primary: '#355C7D',
  }
}

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component{...pageProps}/>)
  }

  return (
    <>
    <Head>
        <title>next menunya</title>
        <meta name="description" content="lagi nyoba kkwk"/>
    </Head>
    <Header/>
     <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    <Footer/>
    </>
  )
}

export default MyApp
