import React, {useEffect, useState} from "react";
import './App.css'

const useFetch = url => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    useEffect(async () => {
        //document.title = `you clicked ${count} clicks`
        const response = await fetch(url)
        const data = await response.json()
        const [item] = data.results
        setData(item)
        setLoading(false)
    },[])
    return {data, loading}
}

export default () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch("https://api.randomuser.me/")
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} >Click me</button>
            {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
        </div>
    )
}