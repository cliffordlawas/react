import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        amount={props.items[0].amount}
        title={props.items[0].title}
        date={props.items[0].date}
      />
    </Card>
  );
}

export default Expenses;
