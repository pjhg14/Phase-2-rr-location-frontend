import User from "./User";

function Header() {
    return(
        <div className="header">
            <img className="logo" src="/rrphotos/funny_icons_toilet.png"/>
            <h1>The Loo Review</h1>

            <User/>
        </div>
    )
}

export default Header