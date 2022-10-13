// Với obj lồng nhau, khi update 1 state, cần copy obj và các obj con để truy cập update state
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    name: 'Phuong Loan',
    info: {
      age: 23,
      address: 'Ha Nam',
      contact: {
        phone: 123,
      }
    }
  })

  const handleAddressChange = (e) => {
    setUser({
      ...user,
      info: {
        ...user.info,
        address: e.target.value
      }
    })
  }

  const handleAgeChange = (e) => {
    setUser({
      ...user,
      info: {
        ...user.info,
        age: e.target.value
      }
    })
  }

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value
    })
  }

  const handlePhoneChange = (e) => {
    setUser({
      ...user,
      info: {
        ...user.info,
        contact: {
          ...user.info.contact,
          phone: e.target.value
        }
      }
    })
  }

  return (
    <div className="App">
      <label>
        Name
        <input
          value={user.name}
          onChange={handleNameChange}
        />
      </label>
      <br />

      <label>
        Age
        <input
          value={user.info.age}
          onChange={handleAgeChange}
        />
      </label>
      <br />

      <label>
        Address
        <input
          value={user.info.address}
          onChange={handleAddressChange}
        />
      </label>
      <br />

      <label>
        Number phone
        <input
          value={user.info.contact.phone}
          onChange={handlePhoneChange}
        />
      </label>
      <br />

      <p>{user.name} {user.info.age} years old {user.info.contact.phone} {user.info.address} province</p>
    </div>
  );
}

export default App;
