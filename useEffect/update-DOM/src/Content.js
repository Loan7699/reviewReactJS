// Callback được gọi mỗi khi Component mounted
// 1. useEffect(callback)
// - Callback được gọi mỗi khi Component re-render
// - Callback được gọi sau khi element được thêm vào DOM
import { useState, useEffect } from 'react'

function Content() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content;