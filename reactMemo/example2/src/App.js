import { useState } from 'react'
import Content from './Content.js'

function App() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  
  return (
    <div className="App">
      <label>
        Name:
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </label>

      <br />

      <label>
        Address:
        <input type='text' value={address} onChange={e => setAddress(e.target.value)}/>
      </label>

      <Content name={name}/>
      <p>Address:{address}</p>
    </div>
  );
}

export default App;
