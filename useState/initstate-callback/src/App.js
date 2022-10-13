// sử dụng callback trong initial state
// 1 hàm: createInitialTodos khác createInitialTodos() ntn?
import { useState } from 'react'

const createInitialTodos = () => {
    const initTodos = [];
    for (let i = 1; i < 5; i++) {
      initTodos.push({
        id: i,
        item: `Item ${i}`
      })
    }
    console.log('render')
    return initTodos;
}

function App() {
  const [todos, setTodos] = useState(createInitialTodos) // createInitialTodos()=> mỗi lần re-render thực thi lại hàm
  // createInitialTodos => truyền biến vào làm initial state, createInitialTodos => trả về giá trị initTodos => chỉ thực thi hàm 1 lần
  const [text, setText] = useState('')

  const handleChangeTodos = (e) => {
    setText(e.target.value)
  }

  const handleAddTodos = () => {
    setTodos(
      [
        ...todos,
        {
          id: todos.length,
          item: text,
        }
      ]
    )
  }

  return (
    <div className="App">
      <input
        value={text}
        onChange={handleChangeTodos}
      />
      <button onClick={handleAddTodos}>Add Todos</button>
      <ul>{todos.map(todo =>
        <li key={todo.id}>{todo.item}</li>
      )}</ul>
    </div>
  );
}

export default App;
