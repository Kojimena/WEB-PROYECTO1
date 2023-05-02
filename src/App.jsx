import React, {useState} from "react"
import "./App.css"
import Header from "./components/Header/Header"
import TopRepos from "./components/TopRepos/TopRepos"
import SecondaryNav from "./components/SecondaryNav/SecondaryNav"
import CreatedRepo from "./components/CreatedRepo/CreatedRepo"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <aside className="Body__left">
          <TopRepos />
        </aside>
        <div className="Body__apart">
          <div className="Body__center">
            <SecondaryNav />
            <CreatedRepo name="jazurdia" namerepo="react-only-lab" imgsrc="src/assets/javier.png" />
            <CreatedRepo name="TheKiesling" namerepo="ESLint" imgsrc="src/assets/kiesling.png" />
            <CreatedRepo name="durini309" namerepo="MaterialCalculator" imgsrc="src/assets/durini.png" />
            <CreatedRepo name="TheKiesling" namerepo="netflix" imgsrc="src/assets/kiesling.png" />
            <CreatedRepo name="denn1s" namerepo="chat-server-sample" imgsrc="src/assets/denn1s.png" />
          </div>
          <div className="Body__right">
            <h1>HOLA</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
