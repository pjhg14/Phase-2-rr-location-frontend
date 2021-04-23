import {useContext, useState} from "react";
import { ThemeContext, UserContext } from "../App";

function NewCommentForm({ id, onCommentAdd, setAddComment }) {
    const theme = useContext(ThemeContext)
    const user = useContext(UserContext)
    const [content, setContent] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();

        let newComment = {
            author: user.get.name, 
            content: content, 
            restroomId: parseInt(id)
        }
        
        fetch("https://salty-retreat-11658.herokuapp.com/comments", {
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
            <textarea className={theme.get} placeholder="Enter Comment" value={content} onChange={e => {setContent(e.target.value)}}/>
            <button className={`submit ${theme.get}`} type="submit">Submit</button>
        </form>
    )
}

export default NewCommentForm;