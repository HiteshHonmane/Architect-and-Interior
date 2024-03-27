import { useState } from 'react'
import Home from './components/home/Home'
import './App.css'
import Contact from './components/contact form/Contact'
import Lenis from '@studio-freight/lenis'
import Footer from './components/footer/Footer'
import Team from './components/team/Team'
import TestimonialsPage from './pages/TestimonialsPage'
import ServicesPage from './pages/ServicesPage'
import FAQPage from './pages/FAQPage'

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
    <TestimonialsPage/>
    <ServicesPage/>
    <FAQPage/>
    <Contact/>
    
    <Footer/>
    
    </>
  )
}

export default App
