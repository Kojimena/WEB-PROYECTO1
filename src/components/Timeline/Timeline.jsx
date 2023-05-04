import React from "react"
import styles from "./Timeline.module.css"
import Timelineitem from "../Timelineitem/Timelineitem"

const Timeline = () => (
  <div className={styles.timelinecontainer}>
    <h2 className={styles.timelineTitle}>Latest changes</h2>
    <ul className={styles.timelineList}>
      <Timelineitem
        date="4 days ago"
        link="Secret scanning now supports validation checks for supported partner patterns"
      />
      <Timelineitem
        date="4 days ago"
        link="Grafana Labs is now a GitHub secret scanning partner"
      />
      <Timelineitem
        date="5 days ago"
        link="Try our new expandable event payload view in your audit log – Private Beta"
      />
      <Timelineitem
        date="5 days ago"
        link="GitHub Issues & Projects – April 27th update"
      />
    </ul>
    <div className={styles.timelinefooter}>
      <a href="https://github.blog/changelog">View changelog →</a>
    </div>
  </div>
)

export default Timeline
