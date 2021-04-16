import './App.css';
import { useEffect, useState } from "react";
import Nav from "./navigation/Nav";

function App() {
    const [restrooms, setRestrooms] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/restrooms")
            .then((resp) => resp.json())
            .then(queriedRestrooms => {
                setRestrooms(queriedRestrooms)
            })
    }, [])

    return (
        <div className="App">
            <Nav restrooms={restrooms}/>
        </div>
    );
}

export default App;
