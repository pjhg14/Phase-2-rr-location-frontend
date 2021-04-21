import { NavLink } from "react-router-dom"
import RestroomList from "./RestroomList"

function Restroom({ restroom }) {
    const { id, name, address, borough } = restroom

    return(
        <li>
            <NavLink className="restroom-card" to={`/restroom-info/${id}`}>
                {name}
            </NavLink>
        </li>
    )
    }
export default Restroom