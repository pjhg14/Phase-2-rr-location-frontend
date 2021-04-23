import { useContext, useState } from "react"
import { ThemeContext } from "../../App"
import NewCommentForm from "../NewCommentForm"
import CommentList from "./CommentList"

function CommentBox({ id, commentList, handleAddComment, handleDeleteComment }) {
    const [addComment, setAddComment] = useState(false)
    const theme = useContext(ThemeContext)
    // Rendering elements
    return(
        <div className="comments">
            <p className="comment-section">Comments:</p>
            <CommentList commentList={commentList} handleDeleteComment={handleDeleteComment}/>
            <button className={`add-comment ${theme.get}`} onClick={()=> setAddComment(!addComment)}>💬 Comment</button>
            {addComment && 
                <NewCommentForm id={id} onCommentAdd={handleAddComment} setAddComment={setAddComment}/>
            }
        </div>
    )
}

export default CommentBox