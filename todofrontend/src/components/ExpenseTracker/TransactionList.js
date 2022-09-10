import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

function TransactionList() {
const {transactions, DeleteTransaction} = useContext(GlobalContext)
//console.log(context)
  return (
    <div id="history-container">
        <h5 id="myh">Expenditures  History</h5>
            {transactions.map(transaction =>(
                <div key={transaction.id} className="incomeexpense form-control">
                    <div className="flex-wrapper align-items-center">
                      <div style={{flex:4}}>
                        <h6>{transaction.text}</h6>
                      </div>
                      <div style={{flex:2}}>
                        <h6>{transaction.value} ${transaction.amount}</h6>
                      </div>
                       <div style={{flex:1}}>
                         {transaction.value === '+' ? <button className='btn-secondary bg-green' onClick={()=> DeleteTransaction(transaction.id)}>X</button>
                         : <button className='btn-danger' onClick={()=> DeleteTransaction(transaction.id)} >X</button>} 
                      </div>
                    </div>       
                </div>
            ))}     
    </div>
  )
}

export default TransactionList