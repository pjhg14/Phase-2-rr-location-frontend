import { NavLink } from "react-router-dom"
import RestroomList from "./RestroomList"

function Restroom({ restroom }) {
    const { id, name, address, borough } = restroom

    return(
        <ul>
        <li>
        <NavLink className="restroom-card" to={`/restroom-info/${id}`}>
            {name}
        </NavLink>
        </li></ul>
    )
    }
export default Restroom