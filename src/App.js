import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 450,
      date: new Date(2022, 9, 14),
    },
    { 
      id: "e2",
      title: "Rice",
      amount: 1000,
      date: new Date(2022, 9, 20)
    },
    {
      id: "e3",
      title: "Electricity Bill",
      amount: 8000,
      date: new Date(2022, 9, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 20000,
      date: new Date(2022, 10, 1),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
