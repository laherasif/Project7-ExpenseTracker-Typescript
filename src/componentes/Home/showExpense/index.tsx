import React from 'react'


export const ShowExpence = () =>{
    return(
        <li className="transaction">
      <span className="transaction-text">
          {/* {incomeTransaction.incomeText */}
          
          </span>
      <span className="transaction-amount">
        {/* ${incomeTransaction.incomeAmount} */}
      </span>
      <button
        // onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
         <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </li>
    )
}