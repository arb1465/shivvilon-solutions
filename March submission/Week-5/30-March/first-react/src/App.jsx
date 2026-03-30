import { useState } from "react"
import './App.css'
import Comp from "./components/Comp"

function App() {
  const [cnt, setCnt] = useState(7)

  const update = () => {
    setCnt(cnt + 1)
  }

  const update2 = () => {
    setCnt(cnt - 1)
  }

  const obj = {
    name: "Aasutosh Baraiya",
    company : 'Shivvilon Solutions',
    age: 21,
    isIntern: true
  }

  return (
    <>
      <div className="hero" id="center">
        <h1>Hello from ReactJS</h1>
        <div className="counter" id="center"  >
          Counter : {cnt}
          <button onClick={update}>++</button>
          <button onClick={update2}>--</button>
        </div>
        <br />
      </div>
      <div id="center">
        <Comp name="comp-1" obj={obj}/>
        <Comp name="comp-2"/>
        <Comp name="comp-3"/>
      </div>
    </>
  )
}

export default App
