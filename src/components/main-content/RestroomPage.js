import Comment from "./Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function RestroomPage() {
    const { id } = useParams() 
    const [restroom, setRestroom] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:4000/restrooms/${id}?_embed=comments`)
          .then((r) => r.json())
          .then((restroom) => {
              setRestroom(restroom);
              setIsLoaded(true);
          });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const {image, name, address, borough, hours, type, handicap, likes, dislikes, comments} = restroom;

    const commentsArray = comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}/>
    })


    return(
        <div className="restroom-page">
            <div className="info">
                {/* enter current restroom info here */}
                <p>Restroom Info:</p>
                <img src={image}></img>
                <p>address: {address}</p>
                <p>borough: {borough}</p>
                <p>type: {type}</p>
                <p>hours: {hours}</p>
                <p>handicap accessible?: {handicap}</p>
                <p>likes: {likes}</p>
                <p>dislikes: {dislikes}</p>
            </div>
            <div className="comments">
                <CommentForm commentList={comments}/>
                <p>Comments:</p>
                {/* Enter comments */}
                {commentsArray}
            </div>
        </div>
    )
}

export default RestroomPage