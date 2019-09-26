const defaultFilters = {
    text: '',
    sortBy: 'date',
    
}

const filterIncome= (state = defaultFilters, action)=> {
    switch (action.type) {
      case "ADD_Income_TEXT":
       
        return {
            ...state, ...action.text
        }
        case 'ADD_Income_SORTBY':
      
          return {
            ...state, ...action.sortBy
          }
         
         default:
        return state
    }
  }
  
  
  export default filterIncome