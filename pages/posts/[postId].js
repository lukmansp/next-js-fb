import { useRouter } from "next/router"

export default function Post({post}){
    const router = useRouter()

    if (router.isFallback) {
        return <h1>loading...</h1>
    }
    return (
        <>
        <h2>
            {post.id} {post.title}
            <hr/>
        </h2>
        <p>{post.body}</p>
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
    return{
        paths : [
            {params:{postId: '1'}},
            {params:{postId: '2'}},
            {params:{postId: '3'}},
        ],
        // paths : paths,
        fallback: true,
    }
}

export async function getStaticProps(contex){
    const {params} = contex 
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    if (!data.id) {
        return{
            // notFound: true,
            redirect :{
                destination : '/posts',
                permanent: false
            }
        }
    }
console.log(data.id)
    return {
        props : {
            post: data,
        }
    }
}