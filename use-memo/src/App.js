import { useState, useMemo } from 'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleClick = () => {
    setProducts([
      ...products,
      {
        name,
        price: Number(price),
      }
    ])
    setName('')
    setPrice('')
  }

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log('Tính toán lại')
      return result + product.price
    }, 0)
    return result
    }, [products])

  console.log(total)

  return (
    <div className="App" style={{ padding: 100 }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />

      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <br />

      <button onClick={handleClick}>Add</button>

      <p>Total: {total}</p>

      <ul>
        {products.map((product, index) =>
          <li key={index}>{product.name} - {product.price}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
