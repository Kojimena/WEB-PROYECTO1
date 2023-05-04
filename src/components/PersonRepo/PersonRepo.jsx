import React from "react"
import PropTypes from "prop-types"
import styles from "./PersonRepo.module.css"

const PersonRepo = ({
  name, namerepo, imgsrc, fontsize, fontweight,
}) => (
  <div className={styles.repopersoncontainer}>
    <img src={imgsrc} alt="circle" />
    <div className={styles.repopersoninfo}>
      <span className={styles.reponame} style={{ fontSize: fontsize, fontWeight: fontweight }}>
        {`${name}/${namerepo}`}
      </span>
    </div>
  </div>
)

PersonRepo.propTypes = {
  name: PropTypes.string.isRequired,
  namerepo: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  fontsize: PropTypes.string.isRequired,
  fontweight: PropTypes.string.isRequired,
}

export default PersonRepo
