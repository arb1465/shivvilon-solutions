import { useState } from 'react';
import './App.css'

function App() {
  let [bgColor, setBgColor] = useState('white');

  const chngRed = () => {
    setBgColor('red')
  }

  const chngBlue = () => {
    setBgColor('blue')
  }

  const chngGreen = () => {
    setBgColor('green')
  }

  const chngWhite = () => {
    setBgColor('white')
  }

  const chngBlack = () => {
    setBgColor('black')
  }

  return(
    <>
      <div className="container" 
      style={{ 
        backgroundColor: bgColor, 
        color: bgColor === 'black' ? 'white' : 'black' 
      }}>
        <div className="selector">
          <div className="box" onClick={chngRed} style={{backgroundColor: 'red'}}>Red</div>
          <div className="box" onClick={chngBlue} style={{backgroundColor: 'blue'}}>Blue</div>
          <div className="box" onClick={chngGreen} style={{backgroundColor: 'green'}}>Green</div>
          <div className="box" onClick={chngWhite} style={{backgroundColor: 'white', color: 'black'}}>White</div>
          <div className="box" onClick={chngBlack} style={{backgroundColor: 'black', color: 'white'}}>Black</div>
        </div>
      </div>
    </>
  )
}

export default App
