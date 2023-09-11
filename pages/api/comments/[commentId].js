import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const {commentId} = req.query
    
    switch (req.method) {
        case 'GET':
            const comment = comments.find((comment) => comment.id === parseInt(commentId))
            res.status(200).json(comment)
            break;
        case 'DELETE':
            const deleteComment = comments.find((comment) => comment.id === parseInt(commentId))
            const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
            comments.splice(index,1)
            res.status(201).json(deleteComment)
            break;
        default:
            break;
    }
}