import { useContext } from "react";
import { ThemeContext } from "../App";
import User from "./User";

function Header() {
    const theme = useContext(ThemeContext)

    return(
        <div className="header">
            <div className="title">
            <h1>The L
                <img className="toiletpaper" src={theme.get === "light" ? "/rrphotos/toiletpaper.jpg" : "/rrphotos/darktp.jpg"} alt="o"/>
                <img className="toiletpaper" src={theme.get === "light" ? "/rrphotos/toiletpaper.jpg" : "/rrphotos/darktp.jpg"} alt="o"/> Review
            </h1>
            <h2>
                <img className="logo" src={theme.get === "light" ? "/rrphotos/logo.jpg" : "/rrphotos/darkicon.jpg"} alt="logo"/>
                New York City
            </h2>
            </div>
        </div>
    )
}

export default Header