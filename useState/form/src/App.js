import { useState } from 'react'

function App() {
  const [name, setName] = useState('Phuong Loan')
  const [age, setAge] = useState(23)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    setAge(age + 1)
  }

  return (
    <div className="App">
      <input
        value={name}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Increment age</button>
      <p>Hello {name}. You are {age}</p>
    </div>
  );
}

export default App;
