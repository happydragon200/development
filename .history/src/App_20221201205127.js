
import React, { useState } from 'react';
import baguette from './images/baguette.jpg'
import toast from './images/toast.png'
import cheese from './images/cheese.jpg'
import waffle from './images/waffle.jpg'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>LemonDragon's Bakery!</h1>
        <Menu/>
      </header>
    </div>
  );
}

function Menu() {
  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 100

  return (
    <>
      <h1>Total Cost: ${toast_count * toast_price + cheese_count * cheese_price + waffle_count * waffle_price}</h1>
      <h2>Your shopping cart: {toast_count} pieces of Toast, {cheese_count} pieces of Cheese, and {waffle_count} pieces of Waffles</h2>

      const foods = [
        {name: "toast", type: "bread", price: 5, img: {toast}, count: {toast_count}}

      ]


      <div className="flex-parent">
        <BakeryItem
          className="inline"
          img={toast}
          count={toast_count}
          setCount={toast_setcount}
        />
        <BakeryItem
          className="inline"
          img={cheese}
          count={cheese_count}
          setCount={cheese_setcount}
        />
        <BakeryItem
          className="inline"
          img={waffle}
          count={waffle_count}
          setCount={waffle_setcount}
        />
      </div>
    </>
  )
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
