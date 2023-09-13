import Head from "next/head"
import Footer from "@/layout/Footer"
import Image from "next/image"
import blurImage from 'public/1.png'

function About(){
    return <>
    {/* blurDataUrl, to blur from api */}
    <Image src={blurImage} placeholder="blur" alt="pet" width='250' height='420'/>
 
    <Head>
        <title>next percobaa</title>
        <meta name="description" content="lagi nyoba aja"/>
    </Head>
    {['1','2','3'].map((path) =>{
        return (
            <div key={path}>
                <Image src={`/${path}.png`} alt="pet" width='250' height='420'/>
            </div>
        )
    })}
    <h1>About page</h1>
    </>
}

export default About

About.getLayout = function PageLayout(page){
    return (<>
    {page}
    <Footer/>
    </>)
  }