import { useState } from "react";

function RestroomInfo({ restroom, onLike, onDislike }) {
    // Destruct info from current restroom
    const {image, name, address, borough, hours, type, handicap, likes, dislikes} = restroom;

    function handleLikeClick(newLikes) {
        fetch(`http://localhost:4000/restrooms/${restroom.id}`, {
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
        fetch(`http://localhost:4000/restrooms/${restroom.id}`, {
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
            <img src={image}></img>

            <p>Address: {address}</p>
            <p>Borough: {borough}</p>
            <p>Type: {type}</p>
            <p>Hours: {hours}</p>
            <p>Handicap accessible?: {handicap}</p>
            <button onClick={() => {handleLikeClick(likes + 1)}}>👍 Like: {likes}</button>
            <button onClick={() => {handleDislikeClick(dislikes + 1)}}>👎 Dislike: {dislikes}</button>
        </div>
    )
}

export default RestroomInfo