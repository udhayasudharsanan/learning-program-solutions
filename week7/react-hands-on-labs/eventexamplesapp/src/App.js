
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
    sayHello();
  }

  function sayHello() {
    console.log("Hello! Incremented.");
  }

  function sayWelcome(message) {
    alert(`Welcome: ${message}`);
  }

  function handleClick(event) {
    alert("I was clicked");
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Event Examples App</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => sayWelcome("User")}>Say Welcome</button>
      <button onClick={handleClick}>OnPress</button>
      <CurrencyConvertor />
    </div>
  );
}

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  function handleSubmit() {
    setEuro((parseFloat(rupees) / 88.5).toFixed(2));
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <input type="number" value={rupees} onChange={(e) => setRupees(e.target.value)} placeholder="INR" />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

export default App;
