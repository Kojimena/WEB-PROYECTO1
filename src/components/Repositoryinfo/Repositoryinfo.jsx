import React from "react"
import PropTypes from "prop-types"
import styles from "./Repositoryinfo.module.css"

const Repositoryinfo = ({
  user, namerepo, description, numberviews, language, imgsrc, color,
}) => {
  const [mark, setMark] = React.useState(false)

  const handleClick = () => {
    setMark(!mark)
  }

  return (
    <div className={styles.repositoryinfocontainer}>
      <div className={styles.repositoryinfo}>
        <img src={imgsrc} alt="circle" />
        <h2 className={styles.repositoryinfo__title}>{`${user}/${namerepo}`}</h2>
        <button type="button" className={styles.infobutton} onClick={handleClick}>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon">
            {
              !mark ? (
                <path
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
             .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0
             0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0
             2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084
             2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1
             .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                />
              ) : (

                <path
                  fill="#e3b341"
                  d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
             .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766
             1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0
             0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
                />
              )
            }
          </svg>
        </button>
      </div>
      <div className={styles.repositoryinfo__description}>
        <p>
          {" "}
          {description}
          {" "}
        </p>
      </div>
      <div className={styles.repositoryinfo__description__details}>
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" color="#7d8590" className="octicon">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1
             .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0
             0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0
             2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084
             2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1
             .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
          />
        </svg>
        <span>{numberviews}</span>

        <div className={styles.repositoryinfo__description__details__language}>
          <span className={styles.roundcircle} style={{ backgroundColor: color }} />
          <span>{language}</span>
        </div>
      </div>
    </div>
  )
}

Repositoryinfo.propTypes = {
  user: PropTypes.string.isRequired,
  namerepo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberviews: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Repositoryinfo
