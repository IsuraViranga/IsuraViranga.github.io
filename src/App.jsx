import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import NewHero from './Components/NewHero/NewHero'


const App = () => {
  return (
    <div>
      <Navbar/>
      <NewHero/>
      <About/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

//npm run dev