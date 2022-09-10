import { createContext, useReducer } from "react";
import AppReducer from "../components/ExpenseTracker/AppReducer";

//create a global initial state that can be used by all other components
const initialState = {//obj
    transactions:[//list of objects
        //{id: 1, text: 'Flower', amount:25,value:'-'},
        //{id: 2, text: 'Salary', amount:300,value:'+'},
        //{id: 3, text: 'Books', amount:5,value:'-'},
        //{id: 4, text: 'Side hustle', amount:370,value:'+'}
    ]
}

//creating the context now 
export const GlobalContext = createContext(initialState)




//Provider component which is an arrow function that takes children as props
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer,initialState)
    function DeleteTransaction(id){
        dispatch({
                type : 'DELETE_TRANSACTION',
                payload: id
        })
    }
    function AddTransaction(transaction){
        dispatch({
                type : 'ADD_TRANSACTION',
                payload: transaction
        })
    }
    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        DeleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )
}