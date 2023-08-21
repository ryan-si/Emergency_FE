import styles from "./ExpenseItem.module.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);

  return (
    <div>
      <div className={styles.expense_item}>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>{expenseDate.toISOString()}</div>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
