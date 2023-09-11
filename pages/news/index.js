import styles from '../../styles/About.module.scss'

export default function NewsList({news}){
    return(
        <>
        <h2>News lists</h2>
        {
            news.map((data) => {
                return (
                    <div key={data.id}>
                        <p className={styles.highlightscss}>{data.title} | {data.category}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props:{
            news: data
        }
    }
}