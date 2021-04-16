import Search from "./Search";
import RestroomList from "./RestroomList";

function Nav({ restrooms }) {
    return(
        <div className="navigation">
            <Search/>
            <RestroomList restrooms={restrooms}/>
        </div>
    )
}

export default Nav