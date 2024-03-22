import { useState } from 'react'
import Home from './components/home/Home'
import './App.css'
import Contact from './components/contact form/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Contact/>
    </>
  )
}

export default App
