/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react'
import Comp1 from './components/comp1'
import { cntContext } from './context/cntContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <cntContext.Provider value={count}>
        <h1>Hello from App</h1>
        <button onClick={ () => {setCount(count+1)}}>Count is: {count}</button>
        <br />
        <Comp1/>
      </cntContext.Provider>
    </>
  )
}

export default App
