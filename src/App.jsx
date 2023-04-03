import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import Edit from "./Edit"
import Update from "./Update"

function App() {
    return(
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit" element={<Edit/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </div>
    )
}

export default App
