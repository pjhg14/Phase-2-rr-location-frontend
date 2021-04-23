import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import User from "../header/User";
import RestroomList from "./RestroomList";

function Nav({ restrooms }) {
    const theme = useContext(ThemeContext)
    let toggle = true

    function handleDMToggle() {
        if (toggle) {
            theme.set("light")
        } else {
            theme.set("dark")
        }
        toggle = !toggle
    }

    return(
        <div className={`navigation ${theme.get}`}>
            <div className="button-bar">
                <NavLink className="add-restroom" to="/add-restroom">Add Restroom</NavLink>
                <User/>
                <button className="dm-toggle" onClick={handleDMToggle}>{theme.get === "light" ? "dark" : "light"} mode</button>
            </div>
            <RestroomList restrooms={restrooms}/>
        </div>
    )
}

export default Nav