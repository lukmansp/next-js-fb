import Head from "next/head"

function Blog({ article, description }) {
    return <>
        <Head>
            <title>{article}</title>
            <meta name="description" content={description} />
        </Head>
        <h1>id user: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
        <h1>About page</h1>
        <h1>{article}</h1>
    </>
}

export default Blog

export async function getServerSideProps(contex) {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log('env: ',user, password)
    console.log('running gsp on preview mode :' + contex.preview + ', and data:', contex.previewData)
    return {
        props: {
            article: contex.preview ? "ini judul artickel" : "ini judull",
            description: "ini description artikel"
        }
    }
}