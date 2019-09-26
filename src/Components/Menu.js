import React from 'react';
import { NavLink } from 'react-router-dom';
import {signOut} from '.././firebase/authenticate'
import{Navbar, Nav} from 'react-bootstrap'
const Menu = ()=>{
    return (

<Navbar  expand="lg">
  <div style={{color:"#ffc259"}} className="normal-font-size">Budget Web App</div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="ml-auto">
      <li className ="px-4 mt-sm-3 mt-lg-0"> 
        <NavLink   to="/dashBoard" >DashBoard</NavLink>
     </li>
      <li className="px-4 mt-sm-3 mt-lg-0"> 
        <NavLink to="/addIncome" >Add Income</NavLink>
     </li>
      <li className="px-4 mt-sm-3 mt-lg-0">  
         <NavLink to="/addExpense" >Add Expense</NavLink>
     </li>  
      <li className="px-4 mt-sm-3 mt-lg-0">     
                    <NavLink exact  to="/"                
                    onClick={()=>{
                        signOut();
                    }}
                    >Log Out</NavLink>
     </li>  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>




    )
}

export default Menu

