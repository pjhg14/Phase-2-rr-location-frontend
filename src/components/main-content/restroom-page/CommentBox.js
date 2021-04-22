import { useState } from "react"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList, handleAddComment, handleDeleteComment }) {
    const [addComment, setAddComment] = useState(false)
    // Rendering elements
    return(
        <div className="comments">
            <p className="comment-section">Comments:</p>
            <CommentList commentList={commentList} handleDeleteComment={handleDeleteComment}/>
            <button className="add-comment dark" onClick={()=> setAddComment(!addComment)}>💬 Comment</button>
            {addComment && 
                <NewCommentForm id={id} onCommentAdd={handleAddComment} setAddComment={setAddComment}/>
            }
        </div>
    )
}

export default CommentBox