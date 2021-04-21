function Comment({ comment, onCommentDelete }) {
    const {id, author, content} = comment

    function handleDeleteComment() {
        fetch("http://localhost:4000/comments" + id, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => {
                // Remove comment from DOM
                onCommentDelete(comment)
            });
    }

    return(
        <div className="comment">
            <p>User: {author}</p>
            <p className="border-bottom">Comment: {content}</p>
            <button className="delete-button" onClick={() => handleDeleteComment()}>Delete</button>
        </div>
    )
}

export default Comment