import React, { useContext } from 'react'
import { Context } from '../../UseContext/Context'
export const ExpenseList = () =>{
  
  const { state , dispatch} = useContext(Context)

  const deleteTransaction = (id:any) =>{
     
       dispatch({ type:"DELETE_EXPENSE" , payload : { id : id }})
  }

    return(
        <div className="transactions transactions-expense">
        <h2>Expense transaction History</h2>
        <ul className="transaction-list">
          {state.Expense.map(( exp , index:number)=>{
            console.log("state" ,state.Expense)
            return(
            <li className="transaction" key={index}>
            <span className="transaction-text">
                {exp.desc}
                
                </span>
            <span className="transaction-amount">
              ${exp.amount}
            </span>
  
            <button
           
              onClick={() => deleteTransaction(exp.id)}
              className="delete-btn"
            >
               <i className="fa fa-trash" style={{ marginRight:'40px' , color:'white'}} aria-hidden="true"></i>
            </button>
          </li>
            )
          })
            
          }
        </ul>
      </div>
    )
}