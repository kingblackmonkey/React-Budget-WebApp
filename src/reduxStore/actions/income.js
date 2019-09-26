import database from '../../firebase/firebase'



export const addIncomeAction = ({id, des, amount, timeCreatedAt}= {})=>{
 const income = {
     id ,
     des,
     amount,
     timeCreatedAt
 }
 
    return {
        type: 'ADD_INCOME',
        income
      }
}


export function addIncomeActionThunk(income) {
   
    
    return async (dispatch, getState) =>{     
         const uId = getState().firebaseUserId;
      const expenseRef =  await database.ref(`/users/${uId}/income`).push(income);;
          const id = expenseRef.key
       
          dispatch(addIncomeAction({...income, id}))
        
    }

}




export const editIncomeAction = ({id, des, amount, timeCreatedAt}= {})=>{
    const income = {
       id,
        des,
        amount,
        timeCreatedAt
    }
    
       return {
           type: 'EDIT_INCOME',
           income
        }
   }



 export function editIncomeActionThunk({id, des, amount, timeCreatedAt}) {
   
    
    return async (dispatch, getState) =>{     
        const uId = getState().firebaseUserId;
      await database.ref(`/users/${uId}/income/${id}`).update({des,amount,timeCreatedAt});
         
       
        dispatch(editIncomeAction({id,des,amount,timeCreatedAt}))

    }

}

   
export const removeIncomeAction = (id = '')=>{

    
       return {
           type: 'REMOVE_INCOME',
           id
        }
   }   

export function removeIncomeActionThunk(id) {
   
    
    return async (dispatch, getState) =>{     
        const uId = getState().firebaseUserId;
      await database.ref(`/users/${uId}/income/${id}`).remove();
         
       
        dispatch(removeIncomeAction(id))

    }

}   

// fetch expenses from firebase


export const fetchIncomeAction = (income)=>{

    
    return {
        type: 'FETCH_INCOME',
         income
     }
}  

export const fetchIncomeThunk = () => async (dispatch, getState) => {
    try {
        const income = [];
        const uId = getState().firebaseUserId;
        const dataSnapshot =    await  database.ref(`/users/${uId}/income`).once('value');
        //   console.log(dataSnapshot.val())
        // transform data from firebase to array form which the generated ref of each
        // expense   will be the id 
         dataSnapshot.forEach(function(childSnapshot) {
            // key will be "ada" the first time and "alan" the second time
            var key = childSnapshot.key;
            // childData will be the actual contents of the child
            var childData = childSnapshot.val();
       
            // push data to expenses arr
          
           income.push(
                {
                    id: key,
                    des: childData.des,
                    amount: childData.amount,                
                    timeCreatedAt: childData.timeCreatedAt
                }
            )
        });
       
        dispatch(fetchIncomeAction(income))
    } catch (error) {
        console.log(error)
    }




};
