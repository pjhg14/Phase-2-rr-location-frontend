import User from "./User";
// import {useState} from "react";

function Header() {
    // const [light, setLight] = useState(true)
    // const [dark, setDark] = useState(false)
    return(
        <div className="header">
            <div className="title">
                <h5></h5>
            <h1>The L<img className="toiletpaper dark" src="/rrphotos/toiletpaper.jpg"/><img className="toiletpaper" src="/rrphotos/toiletpaper.jpg"/> Review</h1>
            <h2><img className="logo dark" src="/rrphotos/logo.jpg"/>
            New York City</h2>
            </div>
            <User/>
        </div>
    )
}

export default Header