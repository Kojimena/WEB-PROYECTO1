import React from "react"
import styles from "./SecondaryNav.module.css"

const SecondaryNav = () => (
  <nav className={styles.Body__center__nav}>
    <div className={styles.buttonfirst}>
      <a href="google.com">For you</a>
      <span className={styles.buttonbeta}>Beta</span>
    </div>
    <div className={styles.buttonsecond}>
      <a href="google.com">Following</a>
    </div>
  </nav>
)

export default SecondaryNav
