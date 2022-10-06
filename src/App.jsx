import React from 'react'
import Nav from './Component/navbar/navbar'
import Home from './Component/home/home'
import About from './Component/about/about_idab'
import Member from './Component/members/members'
import Constitution from './Component/constitution/constitution'
import Event from './Component/events/events'
import Notice from './Component/notice/notice'
import Publication from './Component/publication/publication'
import Contact from './Component/contact/contact'
import Footer from './Component/footer/footer'

const App = () => {
  return (
    <div>
        <Nav />
        <Home />
        <About/>
        <Member />
        <Constitution />
        <Event />
        <Notice />
        <Publication />
        <Contact />
        <Footer/>
      

    </div>
  )
}

export default App


