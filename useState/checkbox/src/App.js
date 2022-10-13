import { useState } from 'react'

function App() {
  const [liked, setLiked] = useState(true)

  const handleChange = () => {
    setLiked(!liked)
  }

  return (
    <div className="App" style={{ padding: 100 }}>
      <label>
        <input
          type='checkbox'
          checked={liked}
          onChange={handleChange}
        />
        I like this
      </label>

      <p>You {liked?'liked':'did not like'} this</p>
    </div>
  );
}

export default App;
