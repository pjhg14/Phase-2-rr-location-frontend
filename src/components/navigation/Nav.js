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
                <User/>
                <button className={`dm-toggle ${theme.get}`} onClick={handleDMToggle}>{theme.get === "light" ? "🌚 Dark"  : "🌞 Light"}</button>
                <NavLink className={`add-restroom ${theme.get}`} to="/add-restroom">➕ Restroom</NavLink>
            </div>
            <RestroomList restrooms={restrooms}/>
        </div>
    )
}

export default Nav