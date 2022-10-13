import { memo } from 'react'

function Content( {name} ) {
    console.log('re-render')
    return (
        <h2>Hello {name}</h2>
    )
}

export default memo(Content)