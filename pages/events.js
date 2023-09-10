import { useRouter } from "next/router"
import { useState } from "react"

export default function EvenList({ eventList }) {
    const [events, setEvent] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvent = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvent(data)
        router.push('/events?category=sports',undefined, {shallow: true})
    }

    return (
        <>
        <button onClick={fetchSportsEvent}>Sport event
            </button>
            <h1>List Of event</h1>
            {
                events.map((event) =>{
                    return (
                        <div key={event.id}>
                            <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                            <p>{event.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(contex) {
    const { query } = contex
    const { category } = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data,
        }
    }
}