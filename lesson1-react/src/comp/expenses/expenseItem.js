import ExpenseDate from "../date/ExpenseDate"
import "./expenseFile.css";
import Card from "../UI/card.js"
import { useState } from "react";


const ExpenseItem = (props) => {

    const [title, SetTitle] = useState(props.title);

    const clickHandler = () =>{
      SetTitle("updated!!");
      console.log(title);
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
