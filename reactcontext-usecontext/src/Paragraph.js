import { useContext } from 'react'
import { ThemeContext } from './App.js'

function Paragraph() {
    const theme = useContext(ThemeContext)

    return (
        <div className={theme}>
            Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props
        </div>
    )
}
export default Paragraph