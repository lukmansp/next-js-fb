import useSWR from "swr"

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

export default function DashboardSWR() {
    const {data, error} = useSWR('dashboard', fetcher)
    if(error) return ' an error has occured'
    if(!data) return 'loading'
    return (
        <div>
            <h2>Dashboard</h2>
            <h2>post - {data.posts}</h2>
            <h2>likes - {data.likes}</h2>
            <h2>FOllower - {data.followers}</h2> 
        </div>
    )
}