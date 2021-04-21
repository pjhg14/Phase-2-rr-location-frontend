import User from "./User";

function Header() {
    return(
        <div className="header">
            <img className="logo" src="/rrphotos/logo.jpg"/>
            <h1>The L<img className="toiletpaper" src="/rrphotos/toiletpaper.jpg"/><img className="toiletpaper" src="/rrphotos/toiletpaper.jpg"/> Review</h1>

            <User/>
        </div>
    )
}

export default Header