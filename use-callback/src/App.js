// mỗi hàm được khởi tạo => lưu hàm vào ô nhớ => trả ra 1 tham chiếu => mỗi lần tạo hàm mới trả ra 1 tham chiếu mới
// khi count thay đổi => gọi lại hàm App => tạo ra hàm handleIncrease => 1 tham chiếu mới => memo so sánh tham chiếu của prop khác nhau => vẫn re-render lại
// sử dụng useCallback nhận được callback, tạo ra hàm đó và return, lưu tham chiếu ra ngoài phạm vi hàm App
// useCallback((), []) => trả về tham chiếu trước đó
// useCallback((), [deps]) => deps thay đổi, return ra tham chiếu mới; deps ko đổi return tham chiếu trước đó

import { useCallback, useState } from 'react'
import Content from './Content.js'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div className="App" style={{ padding: 100 }}>
      <Content onIncrease={handleIncrease} />
      <h2>{count}</h2>
    </div>
  );
}

export default App;
