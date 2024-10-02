import { addExpense } from "../app/expenseSlice";
import { useDispatch } from "react-redux";

import { useState } from "react";
function ExpesenseForm() {

    const dispatch = useDispatch()
  const [expenseItem, setExpenseItem] = useState("");

  const [amount, setAmount] = useState("");
  const [budgetType, setBudgetType] = useState("");

  const handleAddExpense = () => {
     let expense =  {
        id:Date.now() ,
        expenseItem: expenseItem ,
        amount:parseFloat(amount) ,
        budgetType:budgetType
     }
     dispatch(addExpense(expense));
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter expense item"
        onChange={(e) => setExpenseItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setBudgetType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <button onClick={handleAddExpense}>Add </button>
    </div>
  );
}

export default ExpesenseForm;
