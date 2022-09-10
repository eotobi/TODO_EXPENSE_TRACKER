import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react'
import Header from './components/ExpenseTracker/Header';
import Balance from './components/ExpenseTracker/Balance';
import IncomeExpenses from './components/ExpenseTracker/IncomeExpenses';
import TransactionList from './components/ExpenseTracker/TransactionList';
import AddTransaction from './components/ExpenseTracker/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  
    return (
      <GlobalProvider>
        <div className='container main-container'>
          <Header/>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>   
    )
}
export default App