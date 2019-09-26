const totalize = (data)=>{
 return   data.reduce((accumulator, {amount}) => {
        return accumulator + amount;
    }, 0) ;
}

export default totalize