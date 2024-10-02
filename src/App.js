import logo from './logo.svg';
import './App.css';

import ExpesenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList'
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Budget tracker</h1>
      <ExpesenseForm/>
      <ExpenseList/>
    </div>
  );
}

export default App;
