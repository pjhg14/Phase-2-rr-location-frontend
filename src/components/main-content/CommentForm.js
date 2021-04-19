import {useState} from "react";

function CommentForm(commentList) {
    const [comments, setComments] = useState(commentList)
    const [content, setContent] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {author: "", content: content, id: id}
        
        fetch("http://localhost:4000/comments", {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify (newComment)
          })
          .then((r)=>r.json())
          .then((postedComment) => {
            setComments([...comments, postedComment])
          })
        
    }
    return (
        <form>
            <textarea placeholder="Enter Comment"/>
             <button type="submit">Submit</button>
        </form>
    )
}

export default CommentForm;