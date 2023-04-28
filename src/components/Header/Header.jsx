import React from "react"
import styles from "./Header.module.css"
import gitlogo from "../../assets/github-logoheader.svg"
import bellicon from "../../assets/bell.svg"
import slash from "../../assets/slash.svg"
import plusheader from "../../assets/plusheader.svg"
import circle from "../../assets/circle.svg"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headersearchlogo}>
      <img src={gitlogo} alt="logo" />
      <div className={styles.headersearchbar}>
        <input type="text" placeholder="Search or jump to..." />
        <img src={slash} alt="slash" />
      </div>
    </div>
    <nav className={styles.header__nav}>
      <a href="google.com">Pull requests</a>
      <a href="google.com">Issues</a>
      <a href="google.com">Codespaces</a>
      <a href="google.com">Marketplace</a>
      <a href="google.com">Explore</a>
    </nav>
    <div className={styles.header__user}>
      <img src={bellicon} alt="bell" />
      <img src={plusheader} alt="plus" />
      <img src={circle} alt="circle" />
    </div>
  </header>
)

export default Header
