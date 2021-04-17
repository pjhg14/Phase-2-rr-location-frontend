function Restroom({ restroom }) {
    const { name, location, borough,type,image,hours,handicap } = restroom

    return(
        <li className="restroom-card">
            {name}
            {borough}
        </li>
    )
}

export default Restroom