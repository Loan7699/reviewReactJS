// useContext => truyền state từ Com cha - con ko cần Com trung gian

import Content from './Content.js'
import './App.css'
import { createContext, useState } from 'react'

// 1. create Context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' :'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ padding: 50 }}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
