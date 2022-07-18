import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
import './ExpenseItem.css'

export default function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);

  const ClickHadler = ()=>{
    setTitle("Updated");
    console.log("Clicked");
  }
  


  return (
   
        <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={ClickHadler} >Change Title</button>
        </Card>
        
    
  )
}
