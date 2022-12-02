const ShopItem = ({
  label,
  macros,
  veg,
  price,
  img,
  count,
  setCount,
  popularity,
}) => {
  return (
    <div className="pad">
      <img src={img} className="Item-small" />
      <h4>{label.toUpperCase()}</h4>
      <p>Maros: {macros}</p>
      <p>Vegetarian: {veg.toString()}</p>
      <p>Price: {price}</p>
      <p>Popularity: {popularity}/5</p>
      <p className="smull">You have {count} of this item</p>
      <button onClick={() => setCount(count + 1)}>Add 1 to Cart</button>

      {count > 0 && (
        <button onClick={() => setCount(count - 1)}>Remove 1 from Cart</button>
      )}
    </div>
  )
}
export default ShopItem
