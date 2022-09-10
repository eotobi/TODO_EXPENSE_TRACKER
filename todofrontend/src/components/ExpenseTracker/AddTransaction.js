import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('')
    const [value, setValue] = useState('')
    const [amount, setAmount] = useState( )
    const {AddTransaction} = useContext(GlobalContext)

    const onSubmit =(e)=>{
      e.preventDefault()
      const newTransactions = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        value
      }
      AddTransaction(newTransactions)
    }
    //function checkOneBox(){
      //if (value === '+' && value === "-") {
        //<alert>Only tick one checkbox: Add or deduct</alert>
      //}
    //}

  return (
    <div id="form-wrapper">
        <form onSubmit={onSubmit} className='form-control'>
            <label className='form-label' htmlFor="text"><h6 id="myh">Enter New Transaction</h6></label>
            <input className='form-control' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter transaction value'/>
            <br/>
            <input className='form-control' value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder='Enter Amount'/><br/>
            <input type="checkbox" name="positive" value = "+" onChange={(e)=> setValue(e.target.value)}/>
            <label htmlFor="positive">Add to account</label><br/>
            <input className='checkbox' type="checkbox" name="negative" value="-" onChange={(e)=> setValue(e.target.value)}/>
            <label htmlFor="positive">Deduct from account</label><br/>
            <input className='myButton' id='submit' type="submit" placeholder='Add Transaction'/>
        </form>              
    </div>
  )
}
export default AddTransaction
