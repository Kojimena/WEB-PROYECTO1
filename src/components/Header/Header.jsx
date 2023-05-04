import React from "react"
import styles from "./Header.module.css"
import gitlogo from "../../assets/github-logoheader.svg"
import bellicon from "../../assets/bell.svg"
import slash from "../../assets/slash.svg"
import plusheader from "../../assets/plusheader.svg"

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
      <div className={styles.header__user__plus}>
        <img src={plusheader} alt="plus" />
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="octicon">
          <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0
             11.396 7H4.604a.25.25 0 0 0-.177.427Z"
          />
        </svg>
      </div>
      <img className="styles.userpic" src="src/assets/kojimena.png" alt="circle" />
      <span className="styles.unread" />
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="octicondropdown">
        <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0
             11.396 7H4.604a.25.25 0 0 0-.177.427Z"
        />
      </svg>
    </div>
  </header>
)

export default Header
