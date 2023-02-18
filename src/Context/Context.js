import React,{createContext, useState} from 'react'

export let GlobalState=createContext();

function Context(props) {

    let [data,setData]=useState();
    let [correctResult,setCorrectResult]=useState(0);
    let [limit,setLimit]=useState(10);

  return (
    <GlobalState.Provider value={{data,setData,correctResult,setCorrectResult,limit,setLimit}}>
        {props.children}
    </GlobalState.Provider>
  )
}

export default Context
