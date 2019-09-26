export const  addText= (text = '')=>{
    // console.log(text)

    
       return {
           type: 'ADD_EXPENSE_TEXT',
           text:{
               text
           }
         }
   }

   export const  addSortby= (sortBy = 'Date')=>{
    

    
    return {
        type: 'ADD_EXPENSE_SORTBY',
        sortBy:{
            sortBy
        }
      }
}   


// export const  addTimeCreatedAt= (timeCreatedAt = 'date')=>{
    

    
//     return {
//         type: 'ADD_TIME_CREATED_AT',
//         text
//       }
// } 