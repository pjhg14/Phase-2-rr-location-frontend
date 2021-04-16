import Restroom from "./Restroom";

function RestroomList({ restrooms }) {
    const restroomLinks = restrooms.map(restroom => {
        return(
            <Restroom key={restroom.id} restroom={restroom}/>
        )
    })

    return(
        <ul className="restroom-list">
            {restroomLinks}
        </ul>
    )
}

export default RestroomList