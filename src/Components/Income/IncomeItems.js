import React from 'react';
import {NavLink} from 'react-router-dom'
import format from '../../manipulateData/formatDate'
const IncomeItems = ({id, des,amount, timeCreatedAt})=>{
  

    return (

        <li className="mt-5" >
            <div >${amount/100}</div>
            <div className='my-3'>{des} on {format(timeCreatedAt)}</div> 

            <div >
           
                <button 
                     style={{background: '#d7263d', borderRadius: '5px', color:"white"}}
                     className="btn mx-auto d-block"
                > 
                    <NavLink to = {`/editIncome/${id}`} >
                    Edit Or Remove
                     </NavLink>
                </button>
           
            </div>                     
        </li>
        
    )
} 
  export default IncomeItems