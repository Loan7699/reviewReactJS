// khi dữ liệu thay đổi => giao diện tự động cập nhật lại => sử dụng useState
// useState trả về 1 mảng gồm 2 phần tử
// 1. giá trị hiện tại của state, ban đầu là initial state
// 2. hàm setState để thay đổi giá trị của state

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
 
  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
    // lần đầu onClick => in count = 0
  }

  return (
    <div className="App" style={{ padding: 100 }}>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;

// 1. Hàm App được gọi => count nhận giá trị khởi tạo = 0 => hàm handleClick được khai báo (chưa được gọi) => hàm app return, render giá trị count = 0
// 2. Khi click vào button => hàm handleClick được gọi => count + 1 = 0 + 1 => 1 => hàm App được gọi lại => count = 1, hàm handleClick khai báo => render giá trị count = 1

// 1. Component được re-render mỗi khi setState
// 2. Initial state chỉ sử dụng cho lần đầu
// 3. setState với callback
// 4. initial state với callback
// 5. setState là thay thế state bằng giá trị mới


