import { useContext } from "react";
import { ThemeContext } from "../../App";

function RestroomInfo({ restroom, onLike, onDislike }) {
    // Destruct info from current restroom
    const {image, name, address, borough, hours, type, handicap, likes, dislikes} = restroom;
    const theme = useContext(ThemeContext)

    function handleLikeClick(newLikes) {
        fetch(`https://salty-retreat-11658.herokuapp.com/restrooms/${restroom.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({ 
                likes: newLikes
            })          
        })
        .then((r) => r.json())
        .then(updatedRestroom => {
            // console.log(updatedRestroom)
            onLike({...updatedRestroom, comments: [...restroom.comments]})
        })
    }

    function handleDislikeClick(newDislikes) {
        fetch(`https://salty-retreat-11658.herokuapp.com/restrooms/${restroom.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dislikes: newDislikes
            }),
        })
            .then((resp) => resp.json())
            .then(updatedRestroom => {
                onDislike({...updatedRestroom, comments: [...restroom.comments]})
            })
    }

    return(
        <div className="info">
            <p className="restroom-name">{name}</p>
            <img src={image} alt="restroom"></img>

            <p><label>🧭 Address:</label> {address}</p>
            <p><label>🏙  Borough:</label> {borough}</p>
            <p><label>🏪 Type:</label> {type}</p>
            <p><label>🕰 Hours:</label> {hours}</p>
            <p><label>♿ Handicap accessible?:</label> {handicap ? "Yes" : "No"}</p>
            <button className={theme.get} onClick={() => {handleLikeClick(likes + 1)}}>👍 Like: {likes}</button>
            <button className={theme.get} onClick={() => {handleDislikeClick(dislikes + 1)}}>👎 Dislike: {dislikes}</button>
        </div>
    )
}

export default RestroomInfo