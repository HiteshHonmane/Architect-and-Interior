import { useState } from 'react'
import Home from './components/home/Home'
import './App.css'
import Contact from './components/contact form/Contact'
import Lenis from '@studio-freight/lenis'
import Footer from './components/footer/Footer'

function App() {
 
 // smooth Scroll function
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

  return (
    <>
    <Home/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
