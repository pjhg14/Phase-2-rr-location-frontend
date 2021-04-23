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
                    //set current user
                    if (queriedUser.length > 0) {
                        setError("")
                        user.set(queriedUser[0])
                    } else{
                        //Error State: cannot find passed user
                        setError("User not found, Try signing up!")
                    }
                })
        } else {
            //Error State: cannot operate with no username
            setError("Must have username")
        }
    }

    function handleNewUser(event) {
        event.preventDefault()

        if (event.target.value !== "") {
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
                setError("")
                user.set(addedUser)
            })
        } else {
            //Error State: cannot operate with no username
            setError("Must have username")
        }
        
    }

    return(
        <div className="user">
            <Dropdown>
                <Dropdown.Toggle as={UserToggle} id="dropdown-basic">
                    <label>Current User:</label>{user.get.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>Login</Dropdown.Header>
                    <form className="user-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    <hr/>
                    <Dropdown.Header>Sign-up</Dropdown.Header>
                    <form className="user-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    <p className="error-text">{error}</p>
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