import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class  Form extends React.Component {
    state = this.props.expense?    {
      startDate: new Date(this.props.expense.timeCreatedAt ),
      description: this.props.expense.des,
      amount: this.props.expense.amount/100,
      emptyfields: false}
      : this.props.income ? {
        startDate: new Date(this.props.income.timeCreatedAt) ,
        description: this.props.income.des,
        amount: this.props.income.amount/100,
        emptyfields: false}
      :  {
        startDate:  new Date(),
        description: '',
        amount: '',
        emptyfields: false
      };
    
 
      handleDateChange = date => {
        this.setState(()=>({
          startDate: date
        }));
      };

      handleDescriptionChange = e => {
         const description = e.target.value
     
        this.setState(()=>({
            description
        }));
       
        
      };

      handleAmountChange = e => {
       const amount = e.target.value;
        const patt = /^\d*(\.\d{0,2})?$/;
        if (patt.test(amount))
        this.setState(()=>(
          {
            amount 
           }
        ));
      }; 
      
    handleSubmit = (e)=>{
      e.preventDefault();
      const description = this.state.description.trim();
      const amount = this.state.amount;
      if (!description || !amount){
          this.setState(()=>(
            {
              emptyfields : true
            }
          ));

          setTimeout(()=>{ 
            this.setState(()=>(
              {
                emptyfields : false
              }
            ));
           }, 4000);
      }else{
          this.props.handleSubmit(
            {
              des: this.state.description, 
              amount: this.state.amount * 100, 
              timeCreatedAt: this.state.startDate.getTime()
            }
          )
      }
    }  
 
 
    render (){
         return (
                <form onSubmit = {this.handleSubmit} className="row">
                  {this.state.emptyfields && <p>Fields cannot be empty</p>}
                  
                 
                    <div className="input-group mb-3 col-lg">                  
                       <input 
                       className= "form-control" 
                       type="text"  
                       value = {this.state.description} 
                       onChange = {this.handleDescriptionChange}
                      placeholder="Enter Your Description" 
                      aria-label="description" 
                      aria-describedby="desscription"
                       
                       />
                    </div>                 
                

                    <div className="input-group mb-3 col-lg">                  
                       <input 
                       className= "form-control" 
                       type="text"  
                       value = {this.state.amount} 
                       onChange = {this.handleAmountChange}
                      placeholder="Enter Your Amount" 
                      aria-label="Amount" 
                      aria-describedby="Amount"
                       
                       />
                    </div>
                   
                    <div className="input-group mb-3 col-lg">                  
                      <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                            className = "form-control"
                        /> 
                    </div>
                   

                    <div className="input-group mb-3 col-lg">                  
                        <input  style={{background: '#ffc259', borderRadius:"5px", color:'white' }} className="btn w-25 mx-auto" type="submit" value="Add" />                       
                       
                    </div>

                    {
                      this.props.children?
                      this.props.children: ''
                    }
                  
                </form>
            )
}
   }
  

export default Form