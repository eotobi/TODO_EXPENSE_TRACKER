import React,{useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'


function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.value === '+' ? transaction.amount : null )
  const addMe = amounts.reduce((acc,item) => (acc+=item), 0).toFixed(2)
  const amounty = transactions.map(transaction => transaction.value === '-' ? transaction.amount : null )
  const deductMe = amounty.reduce((acc,item) => (acc+=item), 0).toFixed(2)
  
  return (
    <div className='incomeexpense form-control'>
            <div className="row align-items-center display-flex">
              <div className="col colEdit form-control">
                <h6 id="myh1" className="heads">Income</h6>
                <h6 id="myh1">${addMe}</h6>
              </div>
              <div className="col colEdit1 form-control">
                <h6 id="myh1" className="text-decoration-underline color-red">Expense</h6>
                <h6 id="myh1">${deductMe}</h6>
              </div>  
            </div>
        </div>
  )
}
export default IncomeExpenses