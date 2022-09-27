import React from "react";
import Nav from "./Component/navbar/navbar";
import Home from "./Component/home/home";
import About from "./Component/about/about_idab";
import Member from "./Component/members/members";
import Constitution from "./Component/constitution/constitution";
import Event from "./Component/events/events";
import Notice from "./Component/notice/notice";
import Publication from "./Component/publication/publication";
import Contact from "./Component/contact/contact";
import {Routes,Route} from 'react-router-dom';
import Footer from "./Component/footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Member />
      <Constitution />
      <Event />
      <Notice />
      <Publication />
      <Contact />
      <Footer />


      {/* <Routes>
        <Route path="./Component/home/home.js" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Member />} />
        <Route path="/" element={<Constitution />} />
        <Route path="/" element={<Event />} />
        <Route path="/" element={<Notice />} />
        <Route path="/" element={<Publication />} />
        <Route path="./Component/contact/contact.js" element={<Contact />} />
      </Routes> */}
    </div>
  );
};

export default App;
