import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddItem from "./pages/AddItem"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addItem" element={<AddItem/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
