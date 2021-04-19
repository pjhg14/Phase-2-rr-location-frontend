import React, {useState} from "react";
import Restroom from "./Restroom";

function RestroomList({ restrooms }) {
    const [sortBy, setSortBy] = useState(true)
    const sortBoroughArray=[...restrooms]
    const sortedBorough = sortBoroughArray.sort((a,b) => {
        if(sortBy) {
            return a.id - b.id;
        } else {
            return a.borough.localeCompare(b.borough);
        }
    });

    const restroomLinks = sortedBorough.map(restroom => {
        return(
            <Restroom key={restroom.id} restroom={restroom}/>
        )
    })

    return(
        <main>
          <button onClick={(e) => setSortBy(!sortBy)}>Sort By Borough</button>
            <nav className="restroom-list">
                {restroomLinks}
            </nav>
        </main>

    )
}

export default RestroomList