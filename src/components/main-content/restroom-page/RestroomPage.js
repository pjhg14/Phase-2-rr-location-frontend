import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import RestroomInfo from "./RestroomInfo";

function RestroomPage() {
    //Testing
    // const user = useContext(UserContext)
    //================================

    // Get Id of restroom from page params
    const { id } = useParams() 

    // Set state for current restroom
    const [restroom, setRestroom] = useState(null);

    //Set state for whether or not the restroom has loaded
    const [isLoaded, setIsLoaded] = useState(false);

    // console.log(restroom)

    // When page loads, search server for restroom with current id; set such restroom to current restroom
    useEffect(() => {
        fetch(`https://salty-retreat-11658.herokuapp.com/restrooms/${id}?_embed=comments`)
            .then((r) => r.json())
            .then((restroom) => {
                setRestroom(restroom);
                setIsLoaded(true);
            });
    }, [id]);

    // show loading screen until useEffect has fired
    if (!isLoaded) return <h2 className="main-content">Loading...</h2>;

    // Destruct comments from restroom
    const { comments } = restroom

    function handleAddComment(newComment) {
        setRestroom({...restroom, comments:[...restroom.comments, newComment]})
    }

    function handleLikeInc(likedRestroom) {
        setRestroom(likedRestroom)
    }

    function handleDislikeInc(dislikedRestroom) {
        setRestroom(dislikedRestroom)
    }

    function handleDeleteComment(target) {
        const filteredComments = comments.filter(comment => {
            return comment.id !== target.id
        })
        setRestroom({...restroom, comments: filteredComments})
    }

    // Rendering elements
    return(
        <div className="main-content restroom-page">
            <RestroomInfo restroom={restroom} onLike={handleLikeInc} onDislike={handleDislikeInc}/>
            <CommentBox id={id} commentList={comments} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}/>
        </div>
    )
}

export default RestroomPage