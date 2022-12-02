import React, { useState } from 'react'
import baguette from './images/baguette.jpg'
import toast from './images/toast.png'
import cheese from './images/cheese.jpg'
import waffle from './images/waffle.jpg'
import chicken from './images/chicken.jpg'
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

  const carbsButton = FilterButton(selected, changeSelected, 'carb')
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

function VegButton({veg}, {changeVeg}) {
  const clickChange = () => {
    changeVeg(!veg)
  }

  return (
    <input
      type="checkbox"
      id="vegetarian"
      name="Vegetarian"
      // value="Paneer"
      checked={veg}
      onChange={clickChange}
    />
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

  const [chosen, changeChosen] = useState('Popular')
  const [veg, changeVeg] = useState(false)

  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)
  const [chicken_count, chicken_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 1
  const chicken_price = 0

  const toast_comp = [
    ['carb'],
    toast_price,
    BakeryItem(
      'toast',
      ['carb'],
      true,
      toast_price,
      toast,
      toast_count,
      toast_setcount,
    ),
  ]
  const cheese_comp = [
    ['protein'],
    cheese_price,
    BakeryItem(
      'cheese',
      ['protein'],
      true,
      cheese_price,
      cheese,
      cheese_count,
      cheese_setcount,
    ),
  ]
  const waffle_comp = [
    ['carb'],
    waffle_price,
    BakeryItem(
      'waffles',
      ['carb'],
      true,
      waffle_price,
      waffle,
      waffle_count,
      waffle_setcount,
    ),
  ]

  const chicken_comp = [
    ['protein', 'fat'],
    chicken_price,
    BakeryItem(
      'chicken',
      ['protein', 'fat'],
      false,
      chicken_price,
      chicken,
      chicken_count,
      chicken_setcount,
    ),
  ]

  var final_list = [toast_comp, cheese_comp, waffle_comp, chicken_comp]

  if (selected.length > 0) {
    final_list = final_list.filter(function (food) {
      for (let i = 0; i < selected.length; i++) {
        const option = selected[i]

        if (!food[0].includes(option)) {
          return false
        }
      }
      return true
    })
  }

  if (chosen === 'Price') {
    console.log('DSKFJSKLJFLSLDFj')
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
      <h2>Macros</h2>
      <FilterBar selected={selected} changeSelected={changeSelected} />
      <div></div>
      <div></div>
      <h2>Vegetarian</h2>
      <VegButton veg={veg} changeVeg={changeVeg} />
      <h1>
        Total Cost: $
        {toast_count * toast_price +
          cheese_count * cheese_price +
          waffle_count * waffle_price +
          chicken_count * chicken_price}
      </h1>
      <SortPriceButton chosen={chosen} changeChosen={changeChosen} />
      <h2>
        Your shopping cart: {toast_count} pieces of Toast, {cheese_count} pieces
        of Cheese, {waffle_count} pieces of Waffles, and {chicken_count} pieces
        of chicken
      </h2>

      <div className="flex-parent">{final_list}</div>
    </>
  )
}

function SortPriceButton(props) {
  const { chosen, changeChosen } = props

  const handlePrice = () => {
    changeChosen('Price')
  }

  const handlePopular = () => {
    changeChosen('Popular')
  }

  return (
    <div>
      <h3>Sort</h3>
      <div className="radio">
        <label>
          <input
            type="radio"
            // label="Popular"
            checked={chosen === 'Popular'}
            onChange={handlePopular}
          />
          Popular
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            // label="Price"
            checked={chosen === 'Price'}
            onChange={handlePrice}
          />
          Price
        </label>
      </div>
    </div>
  )
}

function BakeryItem(label, macros, veg, price, img, count, setCount) {
  // const { img, count, setCount } = prop

  return (
    <div className="pad">
      <img src={img} className="Item-small" />
      <h4>{label.toUpperCase()}</h4>
      <p>Maros: {macros}</p>
      <p>Vegetarian: {veg}</p>
      <p>Price: {price}</p>
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
