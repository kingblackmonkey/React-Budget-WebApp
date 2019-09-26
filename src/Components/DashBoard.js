import React from 'react';
import WrapperIncome from '../Components/Income/Income'
import WrapperExpense from '../Components/Expense/Expense'
import Budget from '../Components/Budget'

const DashBoard = ()=>{
   
    return(
        <div  className="mt-5">
            <div className="text-center">
       
                <h1>
                    DashBoard
                </h1>
            </div>
            <div className="text-center">
                <Budget/>
                             
            </div>
            <div className="row">
                <WrapperIncome/>
                <WrapperExpense/>
            </div>            

        </div>
    )
}

export default DashBoard