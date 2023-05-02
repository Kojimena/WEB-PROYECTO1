import React from "react"
import styles from "./CreatedRepo.module.css"
import PropTypes from "prop-types"
import circle from "../../assets/circle.svg"
import PersonRepo from "../PersonRepo/PersonRepo"

const CreatedRepo = ({ name, namerepo, imgsrc }) => (
  <div className={styles.repopersoncontainer}>
    <div className={styles.repopersoninfo}>
      <img src={imgsrc} alt="circle" />
      <span className={styles.repopersonname}>
        {`${name} `}
      </span>
      <span className={styles.repopersondescription}>
        {" created a repository"}
      </span>
      <span className={styles.repopersonname}>
        {`${name}/${namerepo} · 1 hour ago`}
      </span>
    </div>
    <div className={styles.repopersonbox}>
      <div className={styles.repopersonboxinfo}>
        <PersonRepo name={name} namerepo={namerepo} imgsrc={imgsrc} />
        <button type="button" className={styles.repopersonbutton}>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" color="#7d8590" className="octicon">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
             .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0
             0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0
             2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084
             2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1
             .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
            />
          </svg>
          <span className={styles.repopersonstar}>Star</span>
        </button>
        <button type="button" className={styles.repopersonbuttondown}>
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="octicon">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0
             11.396 7H4.604a.25.25 0 0 0-.177.427Z"
            />
          </svg>
        </button>
      </div>
      <span className={styles.repopersonupdated}>
        Updated 1 hour ago
      </span>
    </div>

  </div>

)

CreatedRepo.propTypes = {
  name: PropTypes.string.isRequired,
  namerepo: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
}

export default CreatedRepo
