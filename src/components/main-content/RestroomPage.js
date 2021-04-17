import Comment from "./Coment"

function RestroomPage() {
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