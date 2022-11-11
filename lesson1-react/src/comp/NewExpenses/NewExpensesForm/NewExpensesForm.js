import { useState } from "react";
import "./NewExpensesForm.css";

const NewExpensesForm = (props) => {
  const [Enteredtitle, SetTitle] = useState("");
  const [Enteredamount, SetAmount] = useState("");
  const [Entereddate, SetDate] = useState("");

  const TitleChangeHandler = (event) => {
    SetTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    SetAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    SetDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Enteredtitle,
      amount: Enteredamount,
      data: new Date(Entereddate),
    };

    props.onSavedData(expenseData);
  
    SetTitle('');
    SetAmount('');
    SetDate('')
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} value={Enteredtitle}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
			value={Enteredamount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={DateChangeHandler}
			value={Entereddate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpensesForm;
