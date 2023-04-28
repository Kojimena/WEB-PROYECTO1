import React from "react"
import PropTypes from "prop-types"
import styles from "./PersonRepo.module.css"
import circle from "../../assets/circle.svg"

const PersonRepo = ({ name, namerepo }) => (
  <div className={styles.repopersoncontainer}>
    <img src={circle} alt="circle" />
    <div className={styles.repopersoninfo}>
      <span className={styles.repopersonname}>
        {`${name}/${namerepo}`}
      </span>
    </div>
  </div>
)

PersonRepo.propTypes = {
  name: PropTypes.string.isRequired,
  namerepo: PropTypes.string.isRequired,
}

export default PersonRepo
