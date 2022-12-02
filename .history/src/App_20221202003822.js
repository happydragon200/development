import React, { useState } from 'react'
import baguette from './images/baguette.jpg'
import toast from './images/toast.png'
import cheese from './images/cheese.jpg'
import waffle from './images/waffle.jpg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css'

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>LemonDragon's Bakery!</h1>
          <Menu />
        </header>
      </div>
    </div>
  )
}

function FilterBar() {
  // const { p1, p2 } = props

  const breadButton = FilterButton(selected, changeSelected)
  const proteinButton = FilterButton(selected, changeSelected)
  const livingButton = FilterButton(selected, changeSelected)

  const buttons = [breadButton, proteinButton, livingButton]

  const [selected, changeSelected] = useState([])

  return (
    <div>
      {buttons}
      {selected}
    </div>
  )
}

// function clickChange() {

// }

function FilterButton(props) {
  const { isChecked, setIsChecked } = props

  const clickChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <input
      type="checkbox"
      id="topping"
      name="topping"
      value="Paneer"
      checked={isChecked}
      onChange={clickChange}
    />
  )
}

function Menu() {
  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 100

  const [type, setType] = useState('ALL')

  var foods = [
    {
      name: 'toast',
      type: 'bread',
      price: 5,
      img: { toast },
      count: { toast_count },
    },
    {
      name: 'cheese',
      type: 'protein',
      price: 10,
      img: { cheese },
      count: { cheese_count },
    },
    {
      name: 'waffle',
      type: 'bread',
      price: 100,
      img: { waffle },
      count: { waffle_count },
    },
  ]

  return (
    <>
      <FilterBar />
      <h1>{type}</h1>
      <h1>
        Total Cost: $
        {toast_count * toast_price +
          cheese_count * cheese_price +
          waffle_count * waffle_price}
      </h1>
      <h2>
        Your shopping cart: {toast_count} pieces of Toast, {cheese_count} pieces
        of Cheese, and {waffle_count} pieces of Waffles
      </h2>

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

      {/* <FilterBar
      p1={p1}
      p2={p2}
      /> */}
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

export default App
