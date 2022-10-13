import { useState, useEffect } from 'react'
import axios from 'axios'

const tabs = ['posts', 'albums', 'todos']

function Content() {
    const [type, setType] = useState('posts')
    const [contents, setContents] = useState([])

    useEffect(() => {
        async function getApi() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            setContents(res.data)
        }
        getApi()
    }, [type])

    return (
        <div>
            {tabs.map(tab =>
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={type === tab ? {color:'white', background: 'black'} : {}}
                >
                    {tab}
                </button>
                
            )}
            {contents.map(content =>
                <li key={content.id}>{content.title}</li>
            )}
        </div>
    )
}

export default Content;