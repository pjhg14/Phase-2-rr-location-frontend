import React, { useContext, useState } from "react"
import { UserContext } from "../App";
import { Dropdown } from "react-bootstrap";

function User() {
    const user = useContext(UserContext)
    const [loginUsername, setLoginUsername] = useState("")
    const [signUpUsername,setSignUpUsername] = useState("")
    const [error, setError] = useState("")


    function handleFormSubmit(event) {
        event.preventDefault()

        if (event.target.username.value !== "") {
            //submit form
            fetch("http://localhost:4000/users")
                .then((resp) => resp.json())
                .then(queriedUsers => {
                    const queriedUser = queriedUsers.filter(user => {
                        return user.name === loginUsername
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

        setSignUpUsername("")
        setLoginUsername("")
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
                name: signUpUsername
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

        setSignUpUsername("")
        setLoginUsername("")
    }

    return(
        <div className="user">
            <Dropdown>
                <Dropdown.Toggle as={UserToggle} id="dropdown-basic">
                    <p className="login-text">Login</p>
                </Dropdown.Toggle>
                    
                <Dropdown.Menu>
                    <label className="user-login">Current User:</label>{user.get.name}
                    <Dropdown.Header>Login</Dropdown.Header>
                    <form className="user-form" onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username" value={loginUsername} onChange={e => setLoginUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    <hr/>
                    <Dropdown.Header>Sign-up</Dropdown.Header>
                    <form className="user-form" onSubmit={handleNewUser}>
                        <input type="text" name="username" placeholder="username" value={signUpUsername} onChange={e => setSignUpUsername(e.target.value)}/>
                        <button type="submit">Enter</button>
                    </form>
                    <p className="error-text">{error}</p>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

const UserToggle = React.forwardRef(({children, onClick}, ref) => (
    <div className="user-button" ref={ref} onClick={e => {
        e.preventDefault()
        onClick(e)
    }}>
        <img src="/rrphotos/user.png" alt="user-img" className="user-icon"/>
        {children}
    </div>
)) 

export default User