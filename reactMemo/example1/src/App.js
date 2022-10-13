import Content from "./Content";
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)

  const handleClick = () => {
    setCount1(count1 + 1)
  }

  return (
    <div className="App">
      <Content />
      <h1>{count1}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
