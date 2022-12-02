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

  const carbsButton = FilterButton(selected, changeSelected, 'carbs')
  const proteinButton = FilterButton(selected, changeSelected, 'protein')
  const fatButton = FilterButton(selected, changeSelected, 'fat')

  const pieButton = FilterButton(selected, changeSelected, 'pie')
  const cakeButton = FilterButton(selected, changeSelected, 'cake')
  const otherButton = FilterButton(selected, changeSelected, 'other')

  const buttons = [carbsButton, proteinButton, fatButton]

  return (
    <div>
      {buttons}
      <h1>{selected}</h1>
    </div>
  )
}

function FilterButton(selected, changeSelected, tag) {
  // const { selected, changeSelected, tag } = props

  const clickChange = () => {
    if (selected.includes(tag)) {
      // const new_selected = selected.remove(tag)

      var new_selected = selected.filter(function (value, index, arr) {
        return value !== tag
      })
      changeSelected(new_selected)
    } else {
      const new_selected = [...selected]
      new_selected.push(tag)
      changeSelected(new_selected)
    }
  }

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

  const [toSort, changeToSort] = useState(true)

  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 100

  const toast_comp = [
    ['carb', 'delicious'],
    toast_price,
    BakeryItem(toast, toast_count, toast_setcount),
  ]
  const cheese_comp = [
    ['protein'],
    cheese_price,
    BakeryItem(cheese, cheese_count, cheese_setcount),
  ]
  const waffle_comp = [
    ['carb'],
    waffle_price,
    BakeryItem(waffle, waffle_count, waffle_setcount),
  ]

  var final_list = [toast_comp, cheese_comp, waffle_comp]

  if (selected.length > 0) {
    console.log('hi')
    console.log(final_list)
    console.log(selected)

    final_list = final_list.filter(function (food) {
      for (let i = 0; i < selected.length; i++) {
        const option = selected[i]

        if (!food[0].includes(option)) {
          console.log('false')
          return false
        }
      }
      console.log('true')
      return true
    })
  }

  if (toSort) {
    final_list.sort(function (a, b) {
      return a[1] - b[1]
    })
  }

  final_list = final_list.map((item) => item.slice(-1))

  console.log('sorted')

  console.log(final_list)
  console.log('hm')

  return (
    <>
      <FilterBar selected={selected} changeSelected={changeSelected} />
      <h1>
        Total Cost: $
        {toast_count * toast_price +
          cheese_count * cheese_price +
          waffle_count * waffle_price}
      </h1>
      <sortPriceButton
      <h2>
        Your shopping cart: {toast_count} pieces of Toast, {cheese_count} pieces
        of Cheese, and {waffle_count} pieces of Waffles
      </h2>

      <div className="flex-parent">{final_list}</div>
    </>
  )
}

function SortPriceButton(toSort, changeToSort) {
  return (
    <form>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="option1"
            checked={this.state.selectedOption === 'option1'}
            onChange={this.handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="option2"
            checked={this.state.selectedOption === 'option2'}
            onChange={this.handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="option3"
            checked={this.state.selectedOption === 'option3'}
            onChange={this.handleOptionChange}
          />
          Option 3
        </label>
      </div>
    </form>
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
