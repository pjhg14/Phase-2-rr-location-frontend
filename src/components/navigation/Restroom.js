import { NavLink } from "react-router-dom"

function Restroom({ restroom }) {
    const { id, name } = restroom

    return(
        <li>
            <NavLink className="restroom-card dark" to={`/restroom-info/${id}`}>
                {name}
            </NavLink>
        </li>
    )
    }
export default Restroom