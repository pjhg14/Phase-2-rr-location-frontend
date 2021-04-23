import { useContext } from "react";
import { UserContext } from "../App";

function Comment({ comment, onCommentDelete }) {
    const user = useContext(UserContext)
    const {id, author, content} = comment

    function handleDeleteComment() {
        fetch("https://salty-retreat-11658.herokuapp.com/comments/" + id, {
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
            {user.get.name.toLowerCase() === author.toLowerCase() &&
                <button className="delete-button" onClick={() => handleDeleteComment()}>Delete</button>
            }
        </div>
    )
}

export default Comment