// dùng spread dải obj cũ vào hàm setState/hoặc truyền callback prev và dải prev
import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    firstName: 'Phuong',
    lastName: 'Loan',
    email: 'loan.ttp@20174887'
  })

  return (
    <div className="App">
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }}
        />
      </label>
      <br />

      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm(prev => (
              {
                ...prev,
                lastName: e.target.value
              }
            ))
          }}
        />
      </label>
      <br />

      <label>
        Email
        <input
          value={form.email}
         onChange={(e) => {
          setForm(prev => ({
            ...prev,
            email: e.target.value
          }))
         }}
        />
      </label>

      <p>{form.firstName} {form.lastName} ({form.email})</p>
    </div>
  );
}

export default App;
