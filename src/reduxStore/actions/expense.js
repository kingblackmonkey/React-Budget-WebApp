import uniqid from 'uniqid'
import database from '../../firebase/firebase'



export const addExpenseAction = ({id,des, amount, timeCreatedAt}= {})=>{
 const expense = {
     id,
     des,
     amount,
     timeCreatedAt
 }
 
    return {
        type: 'ADD_EXPENSE',
        expense
      }
}

export function addExpenseActionThunk(expense) {
   
    
    return async (dispatch, getState) =>{     
          const uId = getState().firebaseUserId;
      const expenseRef =  await database.ref(`/users/${uId}/expenses`).push(expense);;
          const id = expenseRef.key
       
          dispatch(addExpenseAction({...expense, id}))
        
    }

}

export const editExpenseAction = ({id, des, amount, timeCreatedAt}= {})=>{
    const expense = {
       id,
        des,
        amount,
        timeCreatedAt
    }
    
       return {
           type: 'EDIT_EXPENSE',
           expense
        }
   }


export function editExpenseActionThunk({id, des, amount, timeCreatedAt}) {
   
    
    return async (dispatch, getState) =>{   
        const uId = getState().firebaseUserId
         
      await database.ref(`/users/${uId}/expenses/${id}`).update({des,amount,timeCreatedAt});
         
       
        dispatch(editExpenseAction({id,des,amount,timeCreatedAt}))

    }

}


   
export const removeExpenseAction = (id = '')=>{
  
    
       return {
           type: 'REMOVE_EXPENSE',
           id
        }
   }   

export function removeExpenseActionThunk(id) {
   
    
    return async (dispatch, getState) =>{     
         const uId = getState().firebaseUserId
      await database.ref(`/users/${uId}/expenses/${id}`).remove();
         
       
        dispatch(removeExpenseAction(id))

    }

}


// fetch expenses from firebase


export const fetchExpensesAction = (expenses)=>{

    
       return {
           type: 'FETCH_EXPENSES',
            expenses
        }
   }  

export const fetchExpensesThunk = () => async (dispatch, getState) => {
    try {
        const expenses = [];
        const uId = getState().firebaseUserId
        const dataSnapshot =    await  database.ref(`/users/${uId}/expenses`).once('value');
        //   console.log(dataSnapshot.val())
        // transform data from firebase to array form which the generated ref of each
        // expense   will be the id 
         dataSnapshot.forEach(function(childSnapshot) {
            // key will be "ada" the first time and "alan" the second time
            var key = childSnapshot.key;
            // childData will be the actual contents of the child
            var childData = childSnapshot.val();
    
            // push data to expenses arr
            console.log(key, childData);
            expenses.push(
                {
                    id: key,
                    des: childData.des,
                    amount: childData.amount,                
                    timeCreatedAt: childData.timeCreatedAt
                }
            )
        });
    
        dispatch(fetchExpensesAction(expenses)) 
    } catch (error) {
        console.log(error)
    }

   
   
  
  };
