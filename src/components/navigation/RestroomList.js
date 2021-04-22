import Restroom from "./Restroom";

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

    return(
        <main>
          {/* <button onClick={(e) => setSortByBorough(!sortByBorough)}>Sort By Borough</button> */}
            <nav className="restroom-list">
                <h3>Manhattan</h3>
                <ul>
                    {filterManhattan}
                </ul>
                <h3>Brooklyn</h3>
                <ul>
                    {filterBrooklyn} 
                </ul>
                <h3>Queens</h3>
                <ul>
                    {filterQueens}
                </ul>
                <h3>Bronx</h3>
                <ul>
                    {filterBronx} 
                </ul>
                <h3>Staten Island</h3>
                <ul>
                    {filterStatenIsland}
                </ul>
            </nav>
        </main>

    )
}

export default RestroomList