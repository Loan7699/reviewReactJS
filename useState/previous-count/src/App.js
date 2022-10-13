import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleIncrease1 = () => {
    setCount1(count1 + 1)

 }

 const handleIncrease3 = () => {
  setCount3(count3 => count3 + 1)
 }

  return (
    <div className="App">
      <h2>{count1}</h2>
      <button onClick={() => {
        handleIncrease1();
        handleIncrease1();
        handleIncrease1();
      }}>Increase + 1</button>

      <h2>{count3}</h2>
      <button onClick={() => {
        handleIncrease3();
        handleIncrease3();
        handleIncrease3();
      }}>Increase + 3</button>
    </div>
  );
}

export default App;
