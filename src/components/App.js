import './App.css';
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./navigation/Nav";
import AddRestroomPage from "./main-content/AddRestroomPage";
import RestroomPage from "./main-content/RestroomPage";
import UserPage from "./main-content/UserPage";

function App() {
    const [restrooms, setRestrooms] = useState([])
    console.log(restrooms)

    useEffect(() => {
        fetch("http://localhost:4000/restrooms")
            .then((resp) => resp.json())
            .then(queriedRestrooms => {
                setRestrooms(queriedRestrooms)
            })
    }, [])

    return (
        <div className="App">
            <Header/>
            <Nav restrooms={restrooms}/>
            {/* <Switch>
                <Route exact path="/">
                    
                </Route>
                <Route>
                    <AddRestroomPage/>
                </Route>
                <Route>
                    <RestroomPage/>
                </Route>
                <Route>
                    <UserPage/>
                </Route>
            </Switch> */}
        </div>
    );
}

export default App;
