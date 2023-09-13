import Head from "next/head"

function Blog({article, description}){
    return <>
    <Head>
        <title>{article}</title>
        <meta name="description" content={description}/>
    </Head>
    <h1>About page</h1>
    </>
}

export default Blog

export async function getServerSideProps(){
    return {
        props:{
            article: "ini judul artickel",
            description: "ini description artikel"
        }
    }
}