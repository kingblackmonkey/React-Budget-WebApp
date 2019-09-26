import React from "react"
import {authenticate} from '../firebase/authenticate'
const Login = ()=>{
    return (
        <div className="login-container">
            <div className="login">
             <h1 className="login-title">Login Into Your Budget Web App</h1>
             <button 
                className="login-btn"
                onClick = {()=>{
                    authenticate();
                }}
                
                
                >Login</button>
            </div>
            
        </div>
    )
}

export default Login 