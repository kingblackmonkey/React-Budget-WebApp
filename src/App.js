import React from 'react';
// import store from './reduxStore/store/store'
// import {Provider} from "react-redux"
import { BrowserRouter , Route , Switch, Router, HashRouter} from 'react-router-dom'
import Menu from './Components/Menu'
import DashBoard from './Components/DashBoard'
import  WrapperAddIncome from './Components/AddIncome/AddIncome'
import  WrapperAddExpense from './Components/AddExpense/AddExpense'
import ErrorPage from './Components/Error'
import WrapperEditExpense from './Components/EditExpense/EditExpense'
import WrapperEditIncome from './Components/EditIncome/EditIncome'
import Login from './Components/login'
// import {fetchExpensesThunk} from './reduxStore/actions/expense'
// import {fetchIncomeThunk} from './reduxStore/actions/income'
import {connect} from 'react-redux'
// import './firebase/firebase'
import {history} from './index'
import PrivateRoute from './Components/PrivateRoute'

class App extends React.Component{
   
  


   
   
   render(){
       
   return (

      <Router history = {history}>
                           
         <Switch>
           <Route exact path="/" component={Login}/>
            <PrivateRoute path="/dashBoard" component={DashBoard}/>
            <PrivateRoute path="/addIncome" component={WrapperAddIncome}/>
            <PrivateRoute  path="/addExpense" component={WrapperAddExpense}/>
            <PrivateRoute  path="/editExpense/:id?" component={WrapperEditExpense}/>
            <PrivateRoute  path="/editIncome/:id?" component={WrapperEditIncome}/>
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   

)
}

}



export default  connect()(App)  ;






