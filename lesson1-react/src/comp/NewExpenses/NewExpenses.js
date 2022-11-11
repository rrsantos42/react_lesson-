import NewExpensesForm from "./NewExpensesForm/NewExpensesForm"
import "./NewExpenses.css"

const NewExpenses = (props) => {

	const SavedDataHandler =(EnteredexpenseData) => {
		const expenseData = {
			...EnteredexpenseData,
			id: Math.random().toString()
		};
		props.onNewData(expenseData)
	}
	return(
		<div className="new-expense">
			<NewExpensesForm onSavedData={SavedDataHandler}/>
		</div>
	)
}

export default NewExpenses