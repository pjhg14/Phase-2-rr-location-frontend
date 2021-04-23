import React, { useContext, useState } from "react"
import { UserContext } from "../App";
import { Dropdown } from "react-bootstrap";

function User() {
    const user = useContext(UserContext)
    const [username, setUsername] = useState("")
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
                    } else{
                        handleNewUser()
                    }
                })
        } else {
            //Error State: username is
            setError("Must have username")
        }
    }

    function handleNewUser() {
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username
            }),
        })
            .then((resp) => resp.json())
            .then(addedUser => {
                user.set(addedUser)
            })
    }

    return(
        <div className="user">
            <Dropdown>
                <Dropdown.Toggle as={UserToggle} id="dropdown-basic">
                    <label>Current User:</label>{user.get.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>Login/Sign-up</Dropdown.Header>
                    <form className="user-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    <p>{error}</p>
                </Dropdown.Menu>
            </Dropdown> 
        </div>
    )
}

const UserToggle = React.forwardRef(({children, onClick}, ref) => (
    <div ref={ref} onClick={e => {
        e.preventDefault()
        onClick(e)
    }}>
        <img src="/rrphotos/user.png" alt="user-img" className="user-icon"/>
        {children}
    </div>
)) 

export default User