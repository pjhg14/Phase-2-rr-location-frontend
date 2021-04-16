function Restroom({ restroom }) {
    const { address, borough,type,image,hours,handicap } = restroom

    return(
        <li className="restroom-card">
            {address}
        </li>
    )
}

export default Restroom