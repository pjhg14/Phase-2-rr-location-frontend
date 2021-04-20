import { useState } from "react";

function RestroomInfo({ restroom }) {
    // Destruct info from current restroom
    const {image, name, address, borough, hours, type, handicap} = restroom;

    // state for current amount of likes
    const [likes, setLikes] = useState(restroom.likes)

    return(
        <div className="info">
            <p>Restroom Info:</p>
            <img src={image}></img>
            <p>{name}</p>
            <p>address: {address}</p>
            <p>borough: {borough}</p>
            <p>type: {type}</p>
            <p>hours: {hours}</p>
            <p>handicap accessible?: {handicap}</p>
            <button onClick={() => {likes++}}>likes: {likes}</button>
            <button onClick={() => {likes++}}>dislikes: dislikes</button>
        </div>
    )
}

export default RestroomInfo