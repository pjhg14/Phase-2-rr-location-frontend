function Comment({comment}) {
    const {author, content} = comment

    return(
        <div className="comment">
            <p>User: {author}</p>
            <p className="border-bottom">Comment: {content}</p>
            
        </div>
    )
}

export default Comment