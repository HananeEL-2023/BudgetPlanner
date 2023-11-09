import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState();
  const [expenses, setExpenses] = useState([]);

  const handleSave = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { name, cost }]);
  };
  console.log(expenses);

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
          <button>x</button>
        </div>
      ))}
    </>
  );
}
