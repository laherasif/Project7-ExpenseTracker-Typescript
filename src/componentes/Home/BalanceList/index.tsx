import React,{useContext} from 'react'
import { Context } from '../../UseContext/Context'
export const BalanceList = () => {
  const { state , dispatch} = useContext(Context)

  const deleteTransaction = ( id:any) => {

    dispatch({ type:"DELETE_INCOME" , payload : {id : id} })

  }
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
      {state.Income.map(( income , index:number)=>{
            return(
            <li className="transaction" key={index}>
            <span className="transaction-text">
                {income.desc}
                
                </span>
            <span className="transaction-amount">
              ${income.amount}
            </span>
            <button
              onClick={() => deleteTransaction(income.id)}
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