import React, {useState} from "react"
import "./App.css"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <div className="Body__left">
          <h1>HOLA</h1>
        </div>
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
