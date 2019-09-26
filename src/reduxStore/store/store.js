import { createStore } from 'redux'
import { combineReducers, applyMiddleware  } from 'redux'
import expenseReducer from '../reducers/expenseReducer'
import incomeReducer from '../reducers/incomeReducer'
import filterExpenseReducer from '../reducers/filterExpenseReducer'
import authUserIdReducer from '../reducers/authUserId'
import filterIncomeReducer from '../reducers/filterIncomeReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// import {addExpenseAction, editExpenseAction , removeExpenseAction } from '../actions/expense'
// import {addIncomeAction , editIncomeAction , removeIncomeAction } from '../actions/income'



// import { addText,  addOrder} from '../actions/filters'


// const store = createStore(combineReducers(
//     {
//         expenses: expenseReducer,      
      
//         filterExpense :  filterExpenseReducer,
        
//         income: incomeReducer,
//         filterIncome :  filterIncomeReducer,
//     }
    
    
//     ),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


    
    
    const store = createStore(combineReducers(
        {
            expenses: expenseReducer,      
          
            filterExpense :  filterExpenseReducer,
            
            income: incomeReducer,
            filterIncome :  filterIncomeReducer,
            firebaseUserId :authUserIdReducer
        }
        
        
        ), composeWithDevTools(
      applyMiddleware(thunk),
      
    ));


// store.subscribe(()=>{
//     console.log(store.getState())
//  })
// store.dispatch(addExpenseAction({des: 'car', amount: 123, timeCreatedAt: 1000}))    
// store.dispatch(editExpenseAction({id:"123" ,des: 'dog', amount: 567, timeCreatedAt: 1000}))    
//  store.dispatch(removeExpenseAction("123"))    


// store.dispatch(addIncomeAction ({des: 'car', amount: 123, timeCreatedAt: 1000}))    
//  store.dispatch(editIncomeAction ({id:"123" ,des: 'dog', amount: 567, timeCreatedAt: 1000}))    
//   store.dispatch(removeIncomeAction ("123"))    

// store.dispatch(addText ('gas'))    
// store.dispatch(addOrder ('amount')) 


export default store
