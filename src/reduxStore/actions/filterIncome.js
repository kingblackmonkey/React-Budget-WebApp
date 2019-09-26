export const  addText= (text = '')=>{
    // console.log(text)

    
       return {
           type: 'ADD_Income_TEXT',
           text:{
               text
           }
         }
   }

   export const  addSortby= (sortBy = 'Date')=>{
    

    
    return {
        type: 'ADD_Income_SORTBY',
        sortBy:{
            sortBy
        }
      }
}   

