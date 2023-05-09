import React from "react"
import PropTypes from "prop-types"
import styles from "./Timelineitem.module.css"

const Timelineitem = ({ date, link }) => (
  <li className={styles.timelineitem}>
    <div className={styles.timelinedot}>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
      </svg>
    </div>
    <div className={styles.timelinecontent}>
      <div className={styles.timelinetime}>
        <relative-time
          datetime="2023-04-28T20:26:44Z"
          class="no-wrap"
          title="Apr 28, 2023, 2:26 PM CST"
        >
          {date}
        </relative-time>
      </div>
      <a href="https://github.blog/">
        {link}
      </a>
    </div>
  </li>
)

Timelineitem.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Timelineitem
