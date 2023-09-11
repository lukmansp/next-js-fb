import { useState } from "react";
import styles from "../../styles/Contact.module.css"

export default function CommentsPage(){
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')


    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () =>{
        const response = await fetch('/api/comments', {
            method: 'POST',
            body : JSON.stringify({comment}),
            headers: {
                'Content-Type':'application/json',
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteSubmit = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`,{
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return(
        <>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button onClick={submitComment}>Submited comment</button>

        <button onClick={fetchComments}>Load Comment</button>
        
        {
            comments.map(comment =>{
                return (
                    <div className={styles.higlight} key={comment.id}>{comment.id} | {comment.text}
                    <button className="btn btn-warning" onClick={() => deleteSubmit(comment.id)}>delete</button>
                    </div>
                )
            })

        }
        </>
    )
}