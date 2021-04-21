import { useState } from "react";

function RestroomInfo({ restroom }) {
    // Destruct info from current restroom
    const {image, name, address, borough, hours, type, handicap} = restroom;

    // state for current amount of likes
    const [likes, setLikes] = useState(restroom.likes)
    const [dislikes, setDislikes] = useState(restroom.dislikes)

    function handleLikeClick() {
        console.log(likes)
        setLikes(likes+1)
        // fetch(`http://localhost:4000/restrooms/${restroom.id}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify (
        //     { 
        //     likes: likes
        //     }
        //   )          
        // })
        // .then((r) => r.json)
        // .then(updatedRestroom => {
        //     setLikes(updatedRestroom.likes)
        // })
    }

    return(
        <div className="info">
            {/* <p>Restroom Info:</p> */}
            <p className="restroom-name">{name}</p>
            <img src={image}></img>

            <p>Address: {address}</p>
            <p>Borough: {borough}</p>
            <p>Type: {type}</p>
            <p>Hours: {hours}</p>
            <p>Handicap accessible?: {handicap}</p>
            <button onClick={() => {setLikes(likes+1)}}>👍 Like: {likes}</button>
            <button onClick={() => {setDislikes(dislikes+1)}}>👎 Dislike: {dislikes}</button>
        </div>
    )
}

export default RestroomInfo