import { Routes, Route} from "react-router-dom"
import Register from "./pages/register"
import Login from "./pages/login"

const App=()=>{
  return(
    <div>
      <Routes>
      <Route index element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>      
      </Routes>
    </div>
  )
}

export default App
