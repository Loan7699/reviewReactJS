// memo: ghi nhớ lại prop của 1 Component => sử dụng toán tử === so sánh từng prop => quyết định re-render lại Component hay ko
import { memo } from 'react'

function Content() {
    console.log('re-render')
    return (
        <h2>Hello</h2>
    )
}

export default memo(Content)