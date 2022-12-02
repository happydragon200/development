
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LemonDragon's Bakery!</h1>
        <h2>Count is {count}</h2>
      </header>
    </div>
  );
}

function BakeryItem() {
  return
}

export default App;
