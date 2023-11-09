import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState();
  const [expenses, setExpenses] = useState([]);

  // Handle Save
  const handleSave = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { name, cost }]);
  };
  // Handle Delete
  const handleDelete = (targetKey) => {
    const newExpenses = expenses.filter(
      (expense, keyExpense) => keyExpense !== targetKey
    );
    setExpenses(newExpenses);
  };

  return (
    <>
      <form action="">
        <h1>Add Expense</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="cost">Cost</label>
        <input
          type="number"
          name=""
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit" onClick={handleSave}>
          Save
        </button>
      </form>
      {expenses.map((expense, keyExpense) => (
        <div key={keyExpense} className="container">
          <p>{expense.name}</p>
          <p>{expense.cost}</p>
          <button onClick={() => handleDelete(keyExpense)}>x</button>
        </div>
      ))}
    </>
  );
}
