 const filter = (data, filters)=>{
 
   
 data =    data.filter((item)=>{
       
        return item.des.includes(filters.text)
        
        
    }).sort((a,b)=>{
      
        if(filters.sortBy === 'date'){
            return  a.getTime - b.getTime
        }else{
            return b.amount - a.amount
        }
        
    }
        )

   return data
}

export default filter