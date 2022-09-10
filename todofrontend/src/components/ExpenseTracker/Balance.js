import React,{useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import IncomeExpenses from './IncomeExpenses'

function Balance() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.value == '+' ? transaction.amount : null )
  const addMe = amounts.reduce((acc,item) => (acc+=item), 0).toFixed(2)
  const amounty = transactions.map(transaction => transaction.value == '-' ? transaction.amount : null )
  const deductMe = amounty.reduce((acc,item) => (acc+=item), 0).toFixed(2)
  const balance = addMe-deductMe
  return (
    <div id="balance-container" >
        <hr/>
        <h5>YOUR BALANCE</h5>
        <h6 id="myh">${balance}</h6>
        <hr/>
    </div>
  )
}
export default Balance