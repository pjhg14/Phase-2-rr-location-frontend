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
            <ul className="restroom-list">
                {restroomLinks}
            </ul>
        </main>

    )
}

export default RestroomList