import React from 'react'
import {addIncomeActionThunk} from '../../reduxStore/actions/income'

import Form from '../Form'

import { connect } from 'react-redux'

const AddIncome = (props)=>{
    return (
        <div>
            <h1 className="text-center">Add Your Income</h1>
            <Form  handleSubmit = {(income)=>{
                props.addIncomeActionThunk(income)
                props.history.push('/dashBoard')
            }}/>
        </div>
    )
}
const mapDispatchToProps = {
    addIncomeActionThunk
  }

export default connect(
  null,mapDispatchToProps
  )( AddIncome) 