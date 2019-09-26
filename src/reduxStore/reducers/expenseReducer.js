


const expenses = (state = [], action)=> {

  switch (action.type) {
    case "ADD_EXPENSE":
     
      return [...state, action.expense]
      case "EDIT_EXPENSE":
    
        return state.map((expense)=>{
              if(expense.id === action.expense.id){
                return action.expense
              }
              return expense
        })
        case 'REMOVE_EXPENSE':
         return state.filter((expense)=>{
            return expense.id !== action.id
         })

        case 'FETCH_EXPENSES':
         return action.expenses

       default:
      return state
  }
}


export default expenses