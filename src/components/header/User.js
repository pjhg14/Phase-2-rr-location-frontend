import { useState } from "react"

function User() {
    const [ddShow, setDdShow] = useState(false)
    const [error, setError] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault()

        if (event.target.username.value !== "") {
            //submit form

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
            <img src="" alt="user-img" onClick={() => setDdShow(true)}/>
            {ddShow && 
                <div className="dd-menu" onMouseLeave={() => setDdShow(false)}>
                    <p>Login/sign-up</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="username" placeholder="username"/>
                        <button type="submit">Enter</button>
                    </form>
                    { error.length > 0 &&     //If error text exists (longer than 0) display error text
                        <p className="error">{error}</p>
                    }
                </div>}
        </div>
    )
}

export default User