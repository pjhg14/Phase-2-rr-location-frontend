import React, {useState} from "react";
import Restroom from "./Restroom";
// import styled from "styled-components";

function RestroomList({ restrooms }) {

    const filterManhattan = restrooms.filter((restroom) => {
        return restroom.borough === "Manhattan";
    })
    .map((restroom) => (
        <Restroom key={restroom.id} restroom={restroom} />
    ))
    const filterStatenIsland = restrooms.filter((restroom) => {
        return restroom.borough === "Staten Island";
    })
    .map((restroom) => (
        <Restroom key={restroom.id} restroom={restroom} />
    ))
    const filterBrooklyn = restrooms.filter((restroom) => {
        return restroom.borough === "Brooklyn";
    })
    .map((restroom) => (
        <Restroom key={restroom.id} restroom={restroom} />
    ))
    const filterQueens = restrooms.filter((restroom) => {
        return restroom.borough === "Queens";
    })
    .map((restroom) => (
        <Restroom key={restroom.id} restroom={restroom} />
    ))
    const filterBronx = restrooms.filter((restroom) => {
        return restroom.borough === "Bronx";
    })
    .map((restroom) => (
        <Restroom key={restroom.id} restroom={restroom} />
    ))

    // const restroomLinks = restrooms.map(restroom => {
    //     return(
    //         <Restroom key={restroom.id} restroom={restroom} className="links"/>
    //     )
    // })

    return(
        <main>
          {/* <button onClick={(e) => setSortByBorough(!sortByBorough)}>Sort By Borough</button> */}
            <nav className="restroom-list">
                <h3>Manhattan</h3>
                {filterManhattan}
                <h3>Brooklyn</h3>
                {filterBrooklyn} 
                <h3>Queens</h3>
                {filterQueens}
                <h3>Bronx</h3>
                {filterBronx} 
                <h3>StatenIsland</h3>
                {filterStatenIsland}
            </nav>
        </main>

    )
}

export default RestroomList