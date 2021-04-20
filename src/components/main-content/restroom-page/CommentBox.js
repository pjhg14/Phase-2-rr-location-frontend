import { useState } from "react"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList }) {
    // Set state for restroom's comments (currently causing infinite loop)
    const [comments, setComments] = useState(commentList)

    // adds a new comment to the comment list and adds it to the DOM
    function handleAddComment(newComment) {
        setComments([...comments, newComment])
    }

    // Rendering elements
    return(
        <div className="comments">
            <NewCommentForm id={id} onCommentAdd={handleAddComment}/>
            <p>Comments:</p>
            <CommentList commentList={comments}/>
        </div>
    )
}

export default CommentBox