import { useRouter } from "next/router"

export default function Product({ product }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>loading...</h1>
    }
    return (
        <>
            <h2>
                {product.title} {product.price}
                <hr />
            </h2>
            <p>{product.description}</p>
        </>
    )
}

export async function getStaticPaths() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()
    // const paths = data.map(post => {
    //     return { 
    //         params:{
    //             postId: `${post.id}`
    //         }
    //     }
    // })
    return {
        paths: [
            { params: { productId: '1' } },
            { params: { productId: '2' } },
            { params: { productId: '3' } },
        ],
        // paths : paths,
        fallback: true,
    }
}

export async function getStaticProps(contex) {
    const { params } = contex

    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    if (!data.id) {
        return {
            notFound: true
        }
    }
    console.log(data.id)
    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}