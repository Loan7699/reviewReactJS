// addEventListener ở phạm vi window => mỗi lần Unmounted vẫn lưu sự kiện vào bộ nhớ => useEffect return 1 hàm => cleanup function
// cleanup function luôn được gọi sau khi Component unmouted

import { useState, useEffect } from 'react'

function Content() {
    const [posts, setPosts] = useState([])
    const [goToTop, setGoToTop] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then (posts => {
            setPosts(posts)
        })
    })

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
           window.addEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>

            {
                goToTop && 
                <button style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}>GO TO TOP</button>
            }
        </div>
    )
}

export default Content