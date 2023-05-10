import React from "react"
import styles from "./Explorerepo.module.css"
import Repositoryinfo from "../Repositoryinfo/Repositoryinfo"

const Explorerepo = () => (
  <div className={styles.explorerepocontainer}>
    <h2 className={styles.exploretitle}>Explore Repositories</h2>
    <div className={styles.explorerepocontainer}>
      <Repositoryinfo
        user="NatLibFi"
        namerepo="Skosmos"
        description="Thesaurus and controlled vocabulary browser using SKOS and SPARQL"
        numberviews={200}
        language="PHP"
        imgsrc="/assets/repo2.png"
        color="yellow"
      />
      <Repositoryinfo
        user="Facebook"
        namerepo="react"
        description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
        numberviews="1.1k"
        language="JavaScript"
        imgsrc="/assets/repo.png"
        color="lightgreen"
      />
      <Repositoryinfo
        user="palantir"
        namerepo="blueprint"
        description="A React-based UI toolkit for the web"
        numberviews="1.4k"
        language="TypeScript"
        imgsrc="/assets/repo3.png"
        color="orange"
      />
    </div>
  </div>
)

export default Explorerepo
