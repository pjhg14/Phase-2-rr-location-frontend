import {useState} from "react";

function NewCommentForm({ id, onCommentAdd, setAddComment }) {
    const [content, setContent] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();

        let newComment = {
            author: "Anon", 
            content: content, 
            restroomId: parseInt(id)
        }
        
        fetch("http://localhost:4000/comments", {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(newComment)
            })
                .then((r)=>r.json())
                .then((postedComment) => {
                    onCommentAdd(postedComment)
                    setAddComment(false)
                })
        
    }
    return (
        <form className="pop-up" onSubmit={handleSubmit}>
            <textarea className="dark" placeholder="Enter Comment" value={content} onChange={e => {setContent(e.target.value)}}/>
            <button className="submit dark"type="submit">Submit</button>
        </form>
    )
}

export default NewCommentForm;