import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import RestroomInfo from "./RestroomInfo";

function RestroomPage() {
    // Get Id of restroom from page params
    const { id } = useParams() 

    // Set state for current restroom
    const [restroom, setRestroom] = useState(null);

    //Set state for whether or not the restroom has loaded
    const [isLoaded, setIsLoaded] = useState(false);

   

    // When page loads, search server for restroom with current id; set such restroom to current restroom
    useEffect(() => {
        fetch(`http://localhost:4000/restrooms/${id}?_embed=comments`)
            .then((r) => r.json())
            .then((restroom) => {
                setRestroom(restroom);
                setIsLoaded(true);
            });
    }, [id]);

    // show loading screen until useEffect has fired
    if (!isLoaded) return <h2>Loading...</h2>;

    // Destruct comments from restroom
    const { comments } = restroom

    // Rendering elements
    return(
        <div className="restroom-page">
            <RestroomInfo restroom={restroom}/>
            <CommentBox id={id} commentList={comments}/>
        </div>
    )
}

export default RestroomPage