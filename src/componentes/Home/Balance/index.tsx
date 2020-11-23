import React, { useContext } from 'react'

import { Context } from '../../UseContext/Context'


type propsRedu = {
  amount : number
}
export const Balance = () =>{
  const { state } = useContext(Context)

  const incomeAmounts = state.Income.map(
    incomeTransaction => incomeTransaction.amount
  );

  const expensAmounrts = state.Expense.map(
    expenseTransaction => expenseTransaction.amount
  );

  
  
  
  const totalIncome = incomeAmounts.reduce((acc, item) => Number(acc ) + Number( item),0);
  const exp= expensAmounrts.reduce((acc, item) => Number(acc ) + Number( item),0);


    return(
        <div className="balance">
      <h2>Your Balance</h2>
      <h3>${Number(totalIncome) - Number(exp)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${exp}</p>
        </div>
      </div>
    </div>
    )
}

