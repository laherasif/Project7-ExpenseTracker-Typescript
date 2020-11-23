import React , { createContext , useReducer } from 'react'
import todosReducer from "./AppReducer";
import { ITodosContext } from "../Types/types";

const initialState  ={
     Expense : [],
      Income : []
}
  

  

interface Iprops {
    children?:React.ReactChild
}

export const  Context = createContext({} as ITodosContext)

export  function  Provider(props: Iprops){

    const [state, dispatch] = useReducer(todosReducer, initialState );

   const value = { state , dispatch }
return <Context.Provider value={ value }>{props.children}</Context.Provider>
}


