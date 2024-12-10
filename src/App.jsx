import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Navbar'
import About from './components/about'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <About/>
    <Footer/> 
    </>
  )
}

export default App
