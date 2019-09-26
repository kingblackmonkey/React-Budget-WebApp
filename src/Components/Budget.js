import React from 'react';
import { connect } from 'react-redux';
import totalize from '../manipulateData/totalize'
import  totalizeBudget from '../manipulateData/totalizeBudget'
const Budget= (props)=>{
   
    return (
        <div className="my-5" >
            <h2 className="my-3 medium-font-size">
            Budget
            
            </h2>
            <h5 className="normal-font-size">
               $ {props.budget} {props.budget < 0 && <span>NEGATIVE</span>}            
            </h5>
            <h5 style={{color:'#59d113'}} className="my-4 medium-font-size ">
                Income $ <span>{props.totalIncome/100}</span>                    
            </h5>
            <h5  style={{color:'#d7263d'}} className="medium-font-size">
                Expense $ <span>{props.totalExpense/100}</span>                    
            </h5> 
        </div>
    )
}


const mapStateToProps = (state)=>{
    return  {
       budget: totalizeBudget(state.income, state.expenses),
       totalIncome: totalize(state.income),
       totalExpense: totalize(state.expenses),

    }

}
    
 

export default  connect(mapStateToProps)(Budget) 