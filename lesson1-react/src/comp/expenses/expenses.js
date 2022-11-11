import ExpenseItem from "./expenseItem";
import "./expenses.css"

const Expenses = (props) => {
  return (
	<div className="expenses">
	 <ExpenseItem
        title={props.Items[0].title}
        amount={props.Items[0].amount}
        date={props.Items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Items[1].title}
        amount={props.Items[1].amount}
        date={props.Items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Items[2].title}
        amount={props.Items[2].amount}
        date={props.Items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Items[3].title}
        amount={props.Items[3].amount}
        date={props.Items[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses