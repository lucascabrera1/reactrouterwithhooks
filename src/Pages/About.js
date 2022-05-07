import React from "react"
import {useLocation, useNavigate} from "react-router"

function About () {
    const location = useLocation()
    const history = useNavigate()
    function goBackHandle () {
        history.call()
    }
    return (
    <>
        <div>About Page</div>
        <div>location : {location.pathname}</div>
        <div>From : {location.state}</div>
        <button onClick={goBackHandle}></button>
    </>)
}

export default About