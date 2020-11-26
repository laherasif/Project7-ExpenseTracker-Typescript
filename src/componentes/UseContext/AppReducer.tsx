import * as uuid from "uuid";
import { ITodosActions, BalanceState } from "../Types/types";
export default function todosReducer(
  state:BalanceState ,
  action: ITodosActions
): BalanceState {
  switch (action.type) {
    
    case "DELETE_EXPENSE": {
      debugger;
      console.log("payload" , action.payload.id)
      const deletedTodo = state.Expense.filter(item =>{
       return  item.id !== action.payload.id
         
      }
       )
        
      return {
        ...state,
        Expense: deletedTodo
      };
    }

    case "DELETE_INCOME": {
      debugger;
      console.log("payload" , action.payload.id)
      const deletedTodo = state.Income.filter(item =>{
        return  item.id !== action.payload.id
        
       })
        
      return {
        ...state,
        Income: deletedTodo
      };
    }
    case "ADD_INCOME": {
      // debugger
      const newTodo = {
        id : uuid.v4(),
       desc : action.payload.desc,
       amount : action.payload.amount
      };
      return {
        ...state,
        Income: [...state.Income, newTodo]
      };
    }  
    case "ADD_EXPENCE": {
      const newexpense = {
        id : uuid.v4(),
        desc : action.payload.desc,
        amount : action.payload.amount
      };
      return {
        ...state,
        Expense: [...state.Expense, newexpense]
      };
    }

    // case "EDIT_TODO":{
    //   const EditTodo = state.todos.filter(item => {
    //     return item.id === action.payload.id 
        
    //   });
    //   return {
    //     ...state,
    //     todos: EditTodo
    //   };
    // }

    // case "UPDATE_TODO":{
    //   debugger
      
    //   {
    //     var updateState = state.todos;
    //     let id = action.payload.id;
    //     let newList = updateState.filter((item) => item.id !== id);
    //     newList.unshift(action.payload);

    //     return ({
    //         ...state,
    //         todos: newList,

    //     });
    // }
  // }
    default: {
      return state;
    }
  }
}
