import React from "react"
import Menu from './Menu'
import {Route} from 'react-router-dom'
const PrivateRoute = ({component: Component, ...rest})=>{
   
   
    return (
        <div className="big-container">
             <div style={{background:"rgba(62, 58, 53, 0.9)", borderRadius:'5px'}} className="container text-white">
             <Menu/>
             <Route {...rest} component = {Component} />
        </div>
        </div>
       
       


    )
}

export default PrivateRoute