import ExpenseDate from "../date/ExpenseDate"
import "./expenseFile.css";
import Card from "../UI/card.js"


const ExpenseItem = (props) => {

    const clickHandler = () =>{
      console.log("clicked!!");
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
