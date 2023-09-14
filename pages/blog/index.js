import Head from "next/head"

function Blog({ article, description }) {
    return <>
        <Head>
            <title>{article}</title>
            <meta name="description" content={description} />
        </Head>
        <h1>About page</h1>
        <h1>{article}</h1>
    </>
}

export default Blog

export async function getStaticProps(contex) {
    console.log('running gsp on preview mode :' + contex.preview + ', and data:', contex.previewData)
    return {
        props: {
            article: contex.preview ? "ini judul artickel" : "ini judull",
            description: "ini description artikel"
        }
    }
}