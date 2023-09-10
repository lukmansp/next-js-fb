export default function ArticleListByCategory({articles, category}){
    return(
        <>
        <h1>Showing news for category <i>{category}</i></h1>
        {
            articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>{article.title} | {article.category}</h2>
                        <p>{article.description}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export async function getServerSideProps(contex){
    const { params, req, res, query } = contex
    console.log("query"+query)
    console.log("setheader"+req.headers.cookie)
    res.setHeader('Set-Cookie', ['name-Lukmans'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}