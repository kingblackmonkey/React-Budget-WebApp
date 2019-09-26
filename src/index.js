import React from 'react';
import ReactDOM from 'react-dom';

 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { directive } from '@babel/types';
import * as firebase from "firebase/app";
import "firebase/auth";
import store from './reduxStore/store/store'
import {Provider} from "react-redux"
import {fetchExpensesThunk} from './reduxStore/actions/expense'
import {fetchIncomeThunk} from './reduxStore/actions/income'
import { createBrowserHistory } from 'history';
import authUserIdGenerator from './reduxStore/actions/authUserId'

export const history = createBrowserHistory();


const fetchDataAndFillReduxStore =async()=>{
     await store.dispatch(fetchExpensesThunk())  
     await store.dispatch( fetchIncomeThunk())    
     ReactDOM.render(
   
      <Provider store={store}>     
              <App  />        
      </Provider>, 
        
        
        document.getElementById('root')
        
        
        ); 
     
}



firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
                if(history.location.pathname === '/'){
                      store.dispatch(authUserIdGenerator(user.uid))
                        history.push('/dashBoard')
                        fetchDataAndFillReduxStore();

                        console.log('sign in')
                }else{
                        store.dispatch(authUserIdGenerator(user.uid))
                        fetchDataAndFillReduxStore();   
                }
                    
        } else {
                history.push('/') 
                fetchDataAndFillReduxStore();  
                console.log('sign out')
        }
      });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

