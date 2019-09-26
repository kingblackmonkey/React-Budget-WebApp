import React from 'react';
import IncomeItems from './IncomeItems';
import { connect } from 'react-redux'
import Filter from '.././filters/filters'
import {addText, addSortby} from '../../reduxStore/actions/filterIncome'
import filter from '../../manipulateData/filtersAndSort'
const Income = (props)=>{
   
    return (
    <div className="col-lg-6">
        <h6 className="normal-font-size">Income</h6>
        <div>
         
          <Filter 
                dispatchText = {(text)=>{
                    props.addText(text)
                }}
                dispatchSortby = {(sortBy)=>{
                    props.addSortby(sortBy)
                }}
          />
        </div>
        <ul className="text-center mt-5">
            {
                props.income.map((income, i )=>{
                    
                    return <IncomeItems key= {i} {...income}/>
                })
            }
            
        </ul>
    </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        income :  filter(state.income, state.filterIncome)
    }
}

const mapDispatchToProps = {
    addText, 
    addSortby
}



export default connect(
   mapStateToProps,
   mapDispatchToProps
    )( Income) 