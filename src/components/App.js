import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./navigation/Nav";
import AddRestroomPage from "./main-content/AddRestroomPage";
import RestroomPage from "./main-content/restroom-page/RestroomPage";
import UserPage from "./main-content/UserPage";

export const ThemeContext = React.createContext(null)

export const UserContext = React.createContext(null)

function App() {
    const [theme, setTheme] = useState("light")
    const themeState = {
        get: theme,
        set: setTheme
    }
    const [user, setUser] = useState({name: "Guest"})
    const userState = {
        get: user,
        set: setUser
    }
    const [restrooms, setRestrooms] = useState([])

    useEffect(() => {
        fetch("https://salty-retreat-11658.herokuapp.com/restrooms")
            .then((resp) => resp.json())
            .then(queriedRestrooms => {
                setRestrooms(queriedRestrooms)
            })
    }, [])

    function handleAddRestroom(addedRestroom) {
        setRestrooms([...restrooms, addedRestroom])
    }

    return (
        <ThemeContext.Provider value={themeState}>
            <UserContext.Provider value={userState}>
                <div className={`App ${theme}`}>
                    <Header/>
                    <div className="flexbox">
                    <Nav restrooms={restrooms}/>
                    <Switch>
                        <Route exact path="/">
                            <div className="main-content home">
                                <img className="home-img" 
                                    src={`/rrphotos/${theme === "light" ? "toilet.png" : "toilet_dark.jpg"}`} alt="home-img"/>
                                <p className="home-text">Please select a restroom</p>
                            </div>
                        </Route>
                        <Route exact path="/add-restroom">
                            <AddRestroomPage onRestrommAdd={handleAddRestroom}/>
                        </Route>
                        <Route exact path="/restroom-info/:id">
                            <RestroomPage/>
                        </Route>
                        <Route exact path="/user-info">
                            <UserPage/>
                        </Route>
                    </Switch>
                    </div>
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
