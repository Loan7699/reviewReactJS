// khi muốn thực hiện các side effect => s/d useEffect

import { useState } from 'react'
import Content from './Content.js'

function App() {
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div className="App" style={{padding: 100}}>
      <button onClick={handleToggle}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;
