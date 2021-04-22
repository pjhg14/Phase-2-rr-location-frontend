import { useContext, useState } from "react"
import { UserContext } from "../App";

function User() {
    const user = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [ddShow, setDdShow] = useState(false)
    const [error, setError] = useState("")


    function handleFormSubmit(event) {
        event.preventDefault()

        if (event.target.username.value !== "") {
            //submit form
            fetch("http://localhost:4000/users")
                .then((resp) => resp.json())
                .then(queriedUsers => {
                    const queriedUser = queriedUsers.filter(user => {
                        return user.name === username
                    })
                    //setcurrent user
                    if (queriedUser.length > 0) {
                        user.set(queriedUser[0])
                    }
                })

            //all done, no errors to show
            setError("")
            //hide dropdown menu
            setDdShow(!ddShow)
        } else {
            //Error State: username is
            setError("Must have username")
        }
    }

    return(
        <div className="user">
            <img src="/rrphotos/user.png" alt="user-img" className="user-icon" onClick={() => setDdShow(true)}/>
            <p><label>Current User:</label>{user.get.name}</p>
            {ddShow && 
                <div className="dd-menu" onMouseLeave={() => setDdShow(!ddShow)}>
                    <p>Login/sign-up</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    { error.length > 0 &&     //If error text exists (longer than 0) display error text
                        <p className="error">{error}</p>
                    }
                </div>
            }
        </div>
    )
}

export default User