export interface ITodosActions {
  type: "DELETE_INCOME" | "ADD_INCOME" | "ADD_EXPENCE" | "DELETE_EXPENSE";
  payload: {
    id? : string,
    desc?: string;
    amount?: number;
    
  };
}

export interface ITodosContext {
  state: BalanceState;
  dispatch: React.Dispatch<ITodosActions>;
}

export interface BalanceState {
  Income: Array<IncomeAry>;
  Expense: Array<EpenseAry>;


}

// export interface ExpenseState {

// }

export interface IncomeAry {
  id?: string,
  desc?: string;
  amount?: number;
}
export interface EpenseAry {
  id?: string,
  desc?: string;
  amount?: number;
}







