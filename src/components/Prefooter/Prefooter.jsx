import React from "react"
import styles from "./Prefooter.module.css"

const Prefooter = () => (
  <div className={styles.prefooter}>
    <div className={styles.prefooterbutton}>
      <a className={styles.prefooterlink} href="google.com">More</a>
    </div>
    <div className={styles.containertext}>
      <div className={styles.textfirst}>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
        >
          <path
            d={`M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253
      c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211
      c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205
      -.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31
      5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245
      -.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212
      c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173
      .213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5
      a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75
      h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z`}
          />
        </svg>
        <strong>ProTip!</strong>
        &nbsp;
        The feed shows you events from people you
        &nbsp;
        <span style={{ display: "inline-block" }}>
          <a href="/Kojimena?tab=following">follow</a>
          &nbsp;
          and repositories you
          &nbsp;
          <a href="/watching">watch</a>
          &nbsp;
          or
          &nbsp;
          <a href="/Kojimena?tab=stars">star</a>
          .
        </span>
      </div>
      <div className={styles.textsecond}>
        <a href="/Kojimena.private.atom?token=ASQWM2RMLBTTFUHRSTZBPDOCMEPAG" className={styles.subscribe}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
          >
            <path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0
          0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002
          7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2
          13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            />
          </svg>
          Subscribe to your news feed
        </a>
      </div>
    </div>
  </div>
)

export default Prefooter
