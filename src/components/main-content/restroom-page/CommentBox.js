import { useState } from "react"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList, handleAddComment, handleDeleteComment }) {
    // Rendering elements
    return(
        <div className="comments">
            <NewCommentForm id={id} onCommentAdd={handleAddComment}/>
            <p>Comments:</p>
            <CommentList commentList={commentList} handleDeleteComment={handleDeleteComment}/>
        </div>
    )
}

export default CommentBox