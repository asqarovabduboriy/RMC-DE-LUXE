import React from 'react'
import Navbar from './components/Nabar/Navbar'
import Main from './components/Main/Main'
import Products from './components/Products/Products'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <>
     <Navbar/>
     <Main/>
     <Products/>
     <Contact/>
     <Footer/>
     </>
  )
}

export default App