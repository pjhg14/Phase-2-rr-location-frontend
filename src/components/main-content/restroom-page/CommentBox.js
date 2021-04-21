import { useState } from "react"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList, handleAddComment, handleDeleteComment }) {
    const [addComment, setAddComment] = useState(false)
    // Rendering elements
    return(
        <div className="comments">
            <p>Comments:</p>
            <CommentList commentList={commentList} handleDeleteComment={handleDeleteComment}/>
            <button onClick={()=> setAddComment(!addComment)}>Add Comment</button>
            {addComment && 
                <NewCommentForm id={id} onCommentAdd={handleAddComment}/>
            }
        </div>
    )
}

export default CommentBox