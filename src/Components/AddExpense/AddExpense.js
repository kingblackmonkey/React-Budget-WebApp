import React from 'react'
import {addExpenseActionThunk} from '../../reduxStore/actions/expense'

import Form from '../Form'

import { connect } from 'react-redux'

const AddExpense = (props)=>{
    return (
        <div>
            <h1 className="text-center">Add Your Expense</h1>
            <Form  handleSubmit = {(expense)=>{
                props.addExpenseActionThunk(expense)
                props.history.push('/dashBoard');
            }}/>
        </div>
    )
}
const mapDispatchToProps = {
    addExpenseActionThunk
  }

export default connect(
  null,mapDispatchToProps
  )( AddExpense) 