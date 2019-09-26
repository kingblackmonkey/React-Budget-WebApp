const income = (state = [], action)=> {
    switch (action.type) {
      case "ADD_INCOME":
       
        return [...state, action.income]
        case "EDIT_INCOME":
      
          return state.map((income)=>{
                if(income.id === action.income.id){
                  return action.income
                }
                return income
          })
          case 'REMOVE_INCOME':
           return state.filter((income)=>{
              return income.id !== action.id
           })

           case 'FETCH_INCOME':
            return action.income

         default:
        return state
    }
  }
  
  
  export default income