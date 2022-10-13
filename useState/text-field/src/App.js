import { useState } from 'react'

function App() {
  const [text, setText] = useState('hello')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleReset = () => {
    setText('hello')
  }

  return (
    <div className="App" style={{ padding: 100 }}>
      <input
        value={text}
        onChange={handleChange}
      />

      <p>You typed {text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
