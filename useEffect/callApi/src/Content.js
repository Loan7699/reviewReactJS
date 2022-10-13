// 2. useEffect(callback, [])
// - callback chỉ được gọi 1 lần khi Component mounted, không được gọi mỗi khi Component re-render

import { useState, useEffect } from 'react'
import axios from 'axios'

function Content() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getApi() {
            try {
             let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
             setPosts(res.data)
            } catch (error) {
             console.log(error)
            }
         }
         getApi()
    }, [])
    return (
        <div>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        </div>
    )
}

export default Content;