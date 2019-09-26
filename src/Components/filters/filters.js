import React from 'react';

class  Filters extends React.Component {
   state = {
        text: '',
        sortBy: 'date'
   }



   handleTextChange = (e)=>{
       
    const text = e.target.value.trim()
    this.props.dispatchText(text)   
       
    this.setState(()=>{
            
            return {
                text
            }
        })

   }

   handleSortbyChange = (e)=>{
        const sortBy = e.target.value;
        this.props.dispatchSortby(sortBy)  
        this.setState(()=>{
            return {
                sortBy
            }
        })

   }

   render(){
       return (
                <div className="row ">
                    <div className="col-6">
                          <input 
                    type="text" 
                    value ={this.state.text} 
                    onChange =  {this.handleTextChange}
                    className= "form-control"
                    placeholder="Sort By Text"
                    />
                    </div>
                    <div className="col-3">
                         <select   className= "form-control h-100" value={this.state.sortBy} onChange= {this.handleSortbyChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>                           
                        </select>
                    </div>
                  
                   
                </div>
            )
   }
}

export default Filters


