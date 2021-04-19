import React, {useState} from "react";
import Restroom from "./Restroom";

function RestroomList({ restrooms }) {

    const restroomLinks = restrooms.map(restroom => {
        return(
            <Restroom key={restroom.id} restroom={restroom}/>
        )
    })

    return(
        <main>
          {/* <button onClick={(e) => setSortByBorough(!sortByBorough)}>Sort By Borough</button> */}
            <nav className="restroom-list">
                {restroomLinks}
            </nav>
        </main>

    )
}

export default RestroomList