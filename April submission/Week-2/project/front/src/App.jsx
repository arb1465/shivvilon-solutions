import Dashboard from "./components/Dashboard"
import LoginPage from "./components/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
