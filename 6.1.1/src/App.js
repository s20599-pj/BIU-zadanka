// App.js
import React, {useEffect, useState} from "react";
import Display from "./Display";

export default function App() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
        console.log(data);
    }

    if(loading) {
        return (<p>loading...</p>)
    }

    if(fetchData === undefined)
        return(<pre>{JSON.stringify(error, null, 2)}</pre>)

    return (
        <div className="generatedPerson">
            <Display newData={data} />
            <button onClick={() => fetchData()}>Generuj osobę</button>
        </div>
    );
}