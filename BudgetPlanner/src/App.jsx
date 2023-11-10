import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState();
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState();
  const [search, setSearch] = useState([]);

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

  const handleAddBudget = (e) => {
    if (e.key === "Enter") {
      setBudget(e.target.value);
    }
  };
  //Calculate total expenses & Remaining
  let totalExpenses = expenses.reduce((accumulator, expense) => {
    return accumulator + parseFloat(expense.cost);
  }, 0);

  return (
    <>
      <input
        type="number"
        placeholder="Budget:2000 MAD"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        onKeyDown={handleAddBudget}
      />
      <button>Edit</button>
      <p>Remaining : ${parseFloat(budget) - totalExpenses}</p>
      <p>Spend so far : ${totalExpenses}</p>
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
      <h2>Expenses</h2>
      <input
        type="text"
        placeholder="Type to search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

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
