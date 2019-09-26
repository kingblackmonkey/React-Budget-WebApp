import React from 'react';
import Form from '../Form'
import {connect} from 'react-redux'
import {editExpenseActionThunk,  removeExpenseActionThunk } from '../../reduxStore/actions/expense'
const EditExpense = (props)=>{
  

    return (

        <div>
             <h1>Edit Or Remove Your Expense</h1>
                    <Form  
                        expense = {props.expense}
                
                        handleSubmit = {(expense)=>{
                            props.editExpenseActionThunk({...props.match.params, ...expense});
                            props.history.push('/dashBoard');   
                        }} 
                    
                    >
                     <div className="col-lg">
                        <button 
                            style={{background: '#d7263d', borderRadius: '5px', color:"white"}}
                            className="btn mx-auto d-block"
                        onClick = {()=>{
                            props.removeExpenseActionThunk(props.expense.id); 
                            props.history.push('/dashBoard');  
                        }}             
                        >
                            Remove Expense
                        </button>
                    </div>   
                  
                    </Form>  
            
           
        </div>


        
        
    )
} 

const mapStateToProps = (state, ownProps)=>{
    return {
        expense : state.expenses.find((expense)=>{
            return expense.id === ownProps.match.params.id
        })
    }
}

const mapDispatchToProps = {
    editExpenseActionThunk,
    removeExpenseActionThunk
}
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)