
const defaultFilters = {
    text: '',
    sortBy: 'date',
    
}

const filterExpense = (state = defaultFilters, action)=> {
    switch (action.type) {
      case "ADD_EXPENSE_TEXT":
       
        return {
            ...state, ...action.text
        }
        case 'ADD_EXPENSE_SORTBY':
      
          return {
            ...state, ...action.sortBy
          }
         
         default:
        return state
    }
  }
  
  
  export default filterExpense