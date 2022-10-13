// useRef:
// 1. lưu 1 giá trị qua 1 tham chiếu bên ngoài function component
// trả về 1 obj có property 'current'

// count thay đổi => re-render => tạo ra 1 hàm mới
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(60)
  const h2Ref = useRef()

  useEffect(() => {
    const rect = h2Ref.current.getBoundingClientRect()
    console.log(rect)
  })

  const timerId = useRef()
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
    console.log(count)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log(count)
  }

  return (
    <div className="App">
      <h2 ref={h2Ref}>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
