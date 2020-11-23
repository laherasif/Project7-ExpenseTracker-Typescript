import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import './home.css'
import { Context } from '../UseContext/Context'
import { Firebase } from '../Service/firebase_service'
const  Home:React.FC = () =>  {
 const [Income , setIncome] =  useState({ desc : "" , amount : 0})
 const [expense, setExpense] = useState({
  expenseText: "",
  expenseAmount: 0,
});


   useEffect(()=>{
     Firebase()
   })


 const { dispatch } = useContext(Context)


    const HendleInput = (e: any) =>{
       setIncome({ ...Income, [e.target.name]: e.target.value });
    }
    const HendleInputExpens = (e: any) =>{
      setExpense({ ...expense, [e.target.name]: e.target.value });
   }

   const { desc , amount } = Income 
  
   const { expenseText, expenseAmount } = expense;
   
   const HendleExpnseSub = (e: ChangeEvent<HTMLFormElement>) : void  =>{
     e.preventDefault();
     let value ={
      desc : expenseText,
      amount : expenseAmount
    }
       dispatch({ type: "ADD_EXPENCE" , payload : value})
       setExpense({ expenseText :" " , expenseAmount : 0})
      
      
    }

  
    
    const HendleIncomSub = (e: ChangeEvent<HTMLFormElement>) : void  =>{
      e.preventDefault();
    

      let value ={
        desc : desc,
         amount : amount
       }
       
       dispatch({ type: "ADD_INCOME" , payload : value})
       setIncome({ desc :" " , amount : 0})
      
      
    }
    
     
     return (
        <div className="form-wrapper">
      <form onSubmit={HendleIncomSub}>
        <div className="input-group income">
          <input
            type="text"
            name="desc"
            value={desc}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={HendleInput}
          />
          <input
            type="number"
            name="amount"
            value={amount}
            placeholder="Amount"
            autoComplete="off"
            onChange={HendleInput}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={HendleExpnseSub}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={HendleInputExpens}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={HendleInputExpens}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>

        </div>
    )
}

export default Home
