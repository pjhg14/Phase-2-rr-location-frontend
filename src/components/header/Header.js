import User from "./User";

function Header() {
    return(
        <div className="header">
            <img className="logo" src="/rrphotos/logo.jpg" alt="logo"/>
            <h1>
                The L
                <img className="toiletpaper" src="/rrphotos/toiletpaper.jpg" alt="o"/>
                <img className="toiletpaper" src="/rrphotos/toiletpaper.jpg" alt="o"/> Review
            </h1>

            <User/>
        </div>
    )
}

export default Header