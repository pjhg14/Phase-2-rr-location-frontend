import { NavLink } from "react-router-dom"

function Restroom({ restroom }) {
    const { id, name, address, borough } = restroom

    return(
        <NavLink className="restroom-card" to={`/restroom-info/${id}`}>
            {name}
        </NavLink>
    )
}

export default Restroom