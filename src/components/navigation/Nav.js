import Search from "./Search";
import RestroomList from "./RestroomList";
import {useState} from "react";

function Nav({ restrooms }) {
    const [filterBorough, setFilterBorough] = useState("All")

    const filteredList = restrooms
    .filter((restroom) => {
        return filterBorough === "All" || restroom.borough === filterBorough;
    })

    return(
        <div className="navigation">
            <Search/>
            <RestroomList restrooms={filteredList}/>
        </div>
    )
}

export default Nav