import { useContext, useState } from "react"
import { ThemeContext } from "../App"

function AddRestroomPage({ onRestrommAdd }) {
    // Complete form
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [borough, setBorough] = useState("Manhattan")
    const [type, setType] = useState("")
    const [image, setImage] = useState("")
    const [hours, setHours] = useState("")
    const [accessible, setAccessible] = useState(false)
    const theme = useContext(ThemeContext)


    function handleFormSubmit(event) {
        event.preventDefault()

        const newRestroom = {
            name: name,
            address: address,
            borough: borough,
            type: type,
            image: image,
            hours: hours,
            handicap: accessible,
            likes: 0,
            dislikes: 0
        }

        // console.log(newRestroom)
        fetch("http://localhost:4000/restrooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRestroom),
        })
            .then((resp) => resp.json())
            .then(addedRestroom => {
                // add restroom (addedRestroom)
                onRestrommAdd(addedRestroom)
            })
    }

    return(
        <div className="main-content restroom-form">
            <h1>Suggest new restroom</h1>
            <form onSubmit={handleFormSubmit}>
                <label className="restroom-form">
                    Name:
                    <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <br/>
                <label className="restroom-form">
                    Restroom Address:
                    <input type="text" placeholder="Address..." value={address} onChange={e => setAddress(e.target.value)}/>
                </label>
                <br/>
                <label className="restroom-form">
                    Borough:
                    <select value={borough} onChange={e => setBorough(e.target.value)}>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Queens">Queens</option>
                        <option value="Bronx">Bronx</option>
                        <option value="Staten Island">Staten Island</option>
                    </select>
                    <br/>
                </label>
                <br/>
                <label className="restroom-form">
                    Restroom type:
                    <input type="text" placeholder="Type..." value={type} onChange={e => setType(e.target.value)}/>
                </label>
                <br/>
                <label className="restroom-form">
                    Restroom Image:
                    <input type="text" placeholder="Image URL..." value={image} onChange={e => setImage(e.target.value)}/>
                </label>
                <br/>
                <label className="restroom-form">
                    Open hours:
                    <input type="text" placeholder="Hours..." value={hours} onChange={e => setHours(e.target.value)}/>
                </label>
                <br/>
                <label className="restaurant-form">
                    Handicap Accessible?:
                    <input type="checkbox" checked={accessible} onChange={e => setAccessible(e.target.checked)}/>
                </label>
                <br/><br/>
                <button className={`submit-restroom ${theme.get}`} type="submit">Add 🚽 </button>
            </form>
        </div>
    )
}

export default AddRestroomPage