import { useEffect } from "react"
import { useParams } from "react-router"

function UserPage() {
    
    // comment list

    // filter comments to current user's comments

    return(
        <div className="user-info">
            <h3>User:</h3>
            <p>username</p>

            <div className="imageBox">
                <img src="" alt="user-img"/>
                <div className="upload-box"></div>
            </div>

            <div className="comment-list">

            </div>
        </div>
    )
}

export default UserPage 