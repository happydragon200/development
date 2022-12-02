
import React, { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>LemonDragon's Bakery!</h1>
        <h2>Count is {count}</h2>
      </header>
    </div>
  );
}

function Menu() {
  const [count, setCount] = useState(0);
}

function BakeryItem(prop) {

  const { img, count, setCount } = prop
  
  return (
    <div>
    <img src={img} className="Item-small" />
    <p className="smull">You have {count} of this item</p>
    <button onClick={() => setCount(count + 1)}>Add 1 to Cart</button>

    {count > 0 && (
      <button onClick={() => setCount(count - 1)}>Remove 1 from Cart</button>
    )}
  </div>
  )
}

export default App;
