import './App.css';
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./navigation/Nav";
import AddRestroomPage from "./main-content/AddRestroomPage";
import RestroomPage from "./main-content/restroom-page/RestroomPage";
import UserPage from "./main-content/UserPage";

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [restrooms, setRestrooms] = useState([])
    console.log(restrooms)

    useEffect(() => {
        fetch("http://localhost:4000/restrooms")
            .then((resp) => resp.json())
            .then(queriedRestrooms => {
                setRestrooms(queriedRestrooms)
            })
    }, [])

    function handleUserLoginSignUp(user) {
        setCurrentUser(user)
        setLoggedIn(false)
    }

    return (
        <div className="App">
            <Header/>
            <Nav restrooms={restrooms}/>
            <Switch>
                <Route exact path="/">
                    <img className="home-img" src="" alt="home-img"/>
                    <p>Please select a restroom</p>
                </Route>
                <Route exact path="/add-restroom">
                    <AddRestroomPage/>
                </Route>
                <Route exact path="/restroom-info/:id">
                    <RestroomPage/>
                </Route>
                <Route exact path="/user-info">
                    <UserPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
