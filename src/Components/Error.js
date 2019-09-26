import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorPage = ()=>{
    return (
        <div>
           <h1>PAGE NOT FOUND </h1> 
           <NavLink to = "/dashBoard"><button>Go Back</button></NavLink> 
        </div>
        
    )
}

export default ErrorPage