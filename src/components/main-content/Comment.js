function Comment({comment}) {
    const {author, content} = comment

    return(
        <div className="comment">
            <p>Author: {author}</p>
            <p>Comment: {content}</p>
        </div>
    )
}

export default Comment