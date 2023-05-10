import React from "react"
import styles from "./TopRepos.module.css"
import PersonRepo from "../PersonRepo/PersonRepo"

const TopRepos = () => (
  <div className={styles.dashboardsidebar}>
    <h2 className={styles.headersidebar}>
      Top Repositories
      <a href="/google.com">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75
          0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072
          1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5
          12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249
          0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
          />
        </svg>
        {" "}
        New
      </a>
      {" "}
    </h2>
    <div className={styles.headersidesearchbar}>
      <input type="text" placeholder="Find a repository..." />
    </div>
    <div className={styles.headersidelist}>
      <PersonRepo
        name="Kojimena"
        namerepo="PlannyApp"
        imgsrc="/assets/kojimena.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="Kojimena"
        namerepo="BD-Proyecto2"
        imgsrc="/assets/kojimena.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="markalbrand56"
        namerepo="AED-PROYECTO2"
        imgsrc="/assets/mark.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="Kojimena"
        namerepo="BD-Proyecto1"
        imgsrc="/assets/kojimena.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="Kojimena"
        namerepo="Proyecto2_MP"
        imgsrc="/assets/kojimena.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="Kojimena"
        namerepo="PM-L6"
        imgsrc="/assets/kojimena.png"
        fontsize="14px"
        fontweight="500"
      />
      <PersonRepo
        name="markalbrand56"
        namerepo="IS-PROYECTO"
        imgsrc="/assets/mark.png"
        fontsize="14px"
        fontweight="500"
      />
      <button type="button" className={styles.headersideviewall}>
        Show more
      </button>
    </div>
    <div className={styles.headersidefooter}>
      <h2 className={styles.headersidebar}>
        Recent activity
      </h2>
      <div className={styles.headersideborderrounded}>
        <p className={styles.headerp}>
          When you take actions across GitHub,
          <br />
          {" "}
          we’ll provide links to that activity here.
        </p>
      </div>
    </div>
  </div>
)

export default TopRepos
