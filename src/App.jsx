import React, {useState} from "react"
import "./App.css"
import Header from "./components/Header/Header"
import TopRepos from "./components/TopRepos/TopRepos"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <aside className="Body__left">
          <TopRepos />
        </aside>
        <div className="Body__middle">
          <h1>HOLA</h1>
        </div>
        <div className="Body__right">
          <h1>HOLA</h1>
        </div>
      </div>
    </div>
  )
}

export default App
