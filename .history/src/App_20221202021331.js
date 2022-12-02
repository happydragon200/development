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

function FilterBar(props) {
  const { selected, changeSelected } = props

  const breadButton = FilterButton(selected, changeSelected, 'bread')
  const proteinButton = FilterButton(selected, changeSelected, 'protein')
  const livingButton = FilterButton(selected, changeSelected, 'living')

  const buttons = [breadButton, proteinButton, livingButton]

  return (
    <div>
      {buttons}
      <h1>{selected}</h1>
    </div>
  )
}

function FilterButton(selected, changeSelected, tag) {
  // const { selected, changeSelected, tag } = props
  console.log('hmm')
  console.log(selected)
  console.log(changeSelected)

  const clickChange = () => {
    console.log('The checkbox was toggled')
    if (selected.includes(tag)) {
      // const new_selected = selected.remove(tag)

      var new_selected = selected.filter(function (value, index, arr) {
        return value !== tag
      })
      changeSelected(new_selected)
    } else {
      const new_selected = [...selected]
      new_selected.push(tag)
      // console.log(new_selected)
      changeSelected(new_selected)
    }
  }

  const man = true

  return (
    <div>
      {tag}
      <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        // checked={man}
        onChange={clickChange}
      />
    </div>
  )
}

function Menu() {
  const [selected, changeSelected] = useState([])

  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 100

  // const [type, setType] = useState('ALL')

  // var foods = [
  //   {
  //     name: 'toast',
  //     type: 'bread',
  //     price: 5,
  //     img: { toast },
  //     count: { toast_count },
  //   },
  //   {
  //     name: 'cheese',
  //     type: 'protein',
  //     price: 10,
  //     img: { cheese },
  //     count: { cheese_count },
  //   },
  //   {
  //     name: 'waffle',
  //     type: 'bread',
  //     price: 100,
  //     img: { waffle },
  //     count: { waffle_count },
  //   },
  // ]

  // foods.filter(function (value, index, arr) {
  //   return value
  // })

  const toast_comp = [
    { bread: true, protein: false, living: false },
    BakeryItem(toast, toast_count, toast_setcount),
  ]
  const cheese_comp = [
    { bread: false, protein: true, living: false },
    BakeryItem(cheese, cheese_count, cheese_setcount),
  ]
  const waffle_comp = [
    { bread: true, protein: false, living: false },
    BakeryItem(waffle, waffle_count, waffle_setcount),
  ]


  const first_list = [toast_comp, cheese_comp, waffle_comp]
  const final_list = []

  if (selected.length > 0) {
    final_list.filter(food => )
  }


  return (
    <>
      <FilterBar selected={selected} changeSelected={changeSelected} />
      {/* <h1>{type}</h1> */}
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

      <div className="flex-parent">{final_list}</div>
    </>
  )
}

function BakeryItem(img, count, setCount) {
  // const { img, count, setCount } = prop

  return (
    <div className="pad">
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
