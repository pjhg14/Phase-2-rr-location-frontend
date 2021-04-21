import { useState } from "react"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList, handleAddComment }) {
    const [addComment, setAddComment] = useState(false)
    // Set state for restroom's comments (currently causing infinite loop)
    // const [comments, setComments] = useState(commentList)

    // adds a new comment to the comment list and adds it to the DOM


    // Rendering elements
    return(
        <div className="comments">
            <p>Comments:</p>
            <CommentList commentList={commentList}/>
            <button onClick={()=> setAddComment(!addComment)}>Add Comment</button>
            {addComment && <NewCommentForm id={id} onCommentAdd={handleAddComment}/>}

        </div>
    )
}

export default CommentBox