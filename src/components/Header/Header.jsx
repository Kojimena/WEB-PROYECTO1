import React from "react"
import "./Header.css"
import gitlogo from "../../assets/github-logoheader.svg"
import bellicon from "../../assets/bell.svg"
import slash from "../../assets/slash.svg"
import plusheader from "../../assets/plusheader.svg"
import circle from "../../assets/circle.svg"

const Header = () => (
  <header className="header">
    <div className="header-search-logo">
      <img src={gitlogo} alt="logo" className="header__img" />
      <div className="header-searchbar">
        <input type="text" placeholder="Search or jump to..." className="header-searchbar__input" />
        <img src={slash} alt="slash" className="header-searchbar__slash" />
      </div>
    </div>
    <nav className="header__nav">
      <a href="google.com" className="header__nav-link">Pull requests</a>
      <a href="google.com" className="header__nav-link">Issues</a>
      <a href="google.com" className="header__nav-link">Codespaces</a>
      <a href="google.com" className="header__nav-link">Marketplace</a>
      <a href="google.com" className="header__nav-link">Explore</a>
    </nav>
    <div className="header__user">
      <img src={bellicon} alt="bell" className="header__user-bell" />
      <img src={plusheader} alt="plus" className="header__user-plus" />
      <img src={circle} alt="circle" className="header__user-circle" />
    </div>
  </header>
)

export default Header
