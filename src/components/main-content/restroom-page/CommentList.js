import Comment from "../Comment"

function CommentList({ commentList, handleDeleteComment }) {
    const commentDivs = commentList.map(comment => {
        return <Comment key={comment.id} comment={comment} onCommentDelete={handleDeleteComment}/>
    })

    return(
        <div className="comment-list">
            {commentDivs}
        </div>
    )
}

export default CommentList