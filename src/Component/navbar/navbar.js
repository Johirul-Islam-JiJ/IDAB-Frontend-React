import React, { useState } from "react";
import "../Style/navbar_style/navbar.css";
import "../bootstrap_4/css/bootstrap-grid.min.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        IDAB
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="home/home.js" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="about/about_idab.js" className="nav__link">
            About IDAB
          </a>
        </li>
        <li className="nav__item">
          <a href="members/members.js" className="nav__link">
            Members
          </a>
        </li>
        <li className="nav__item">
          <a href="constitution/constitution.js" className="nav__link">
            Constitution
          </a>
        </li>
        <li className="nav__item">
          <a href="events/events.js" className="nav__link">
            Events
          </a>
        </li>
        <li className="nav__item">
          <a href="notice/notice.js" className="nav__link">
            Notice
          </a>
        </li>
        <li className="nav__item">
          <a href="publication/publication.js" className="nav__link">
            Publication
          </a>
        </li>
        <li className="nav__item">
          <a href="publication/publication.js" className="nav__link">
            Courses
          </a>
        </li>
        <li className="nav__item">
          <a href="contact/contact.js" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;