import { NavLink } from "react-router-dom";
import RestroomList from "./RestroomList";

function Nav({ restrooms }) {
    return(
        <div className="navigation">
            <NavLink className="add-restroom" to="/add-restroom">Add Restroom</NavLink>
            <RestroomList restrooms={restrooms}/>
        </div>
    )
}

export default Nav