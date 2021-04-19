import Comment from "./Coment"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RestroomPage() {
    // const { id } = useParams() 

    // useEffect(() => {
    //     //fetch data from id
    // })

    return(
        <div className="restroom-page">
            <div className="info">
                {/* enter current restroom info here */}
                <p>Restroom Info:</p>
                <p>image</p>
                <p>address</p>
                <p>borough</p>
                <p>type</p>
                <p>hours</p>
                <p>handicap accessible?</p>
                <p>likes</p>
                <p>dislikes</p>
            </div>
            <div className="comments">
                <p>Comments:</p>
                {/* Enter comments */}
                <Comment/>
            </div>
        </div>
    )
}

export default RestroomPage