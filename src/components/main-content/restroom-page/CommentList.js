import Comment from "../Comment"

function CommentList({ commentList }) {
    const commentDivs = commentList.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
    })

    return(
        <div className="comment-list">
            {commentDivs}
        </div>
    )
}

export default CommentList