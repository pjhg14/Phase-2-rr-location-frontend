import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../App"

function Restroom({ restroom }) {
    const { id, name } = restroom
    const theme = useContext(ThemeContext)

    return(
        <li>
            <NavLink className={`restroom-card ${theme.get}`} to={`/restroom-info/${id}`}>
                {name}
            </NavLink>
        </li>
    )
    }
export default Restroom