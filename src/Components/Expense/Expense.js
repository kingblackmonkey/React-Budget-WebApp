import React from 'react';
import ExpenseItem from './ExpenseItems'
import { connect } from 'react-redux'
import Filters from '../filters/filters'
import { addText,   addSortby} from '../../reduxStore/actions/filterExpense'
import filter from '../../manipulateData/filtersAndSort'
const Expense = (props)=>{
   
    return (
        <div className="col-lg-6">
            <h6 className="normal-font-size">Expense</h6>
            <Filters  
                dispatchText = {(text)=>{
                  
                    props.addText(text)
                }}
                dispatchSortby = {(sortBy)=>{
                    
                    props.addSortby(sortBy)
                }}
            />
            <ul className="text-center mt-5">
                {
                    props.expenses.map((expense, i)=>{
                        
                        return <ExpenseItem key = {i} {...expense}/>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    
    return {
        expenses : filter(state.expenses, state.filterExpense)
    }
}

const mapDispatchToProps ={
    addText,
    addSortby
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
     )( Expense) 