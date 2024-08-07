import { Route, Routes } from "react-router-dom"
import Nav from "./components/ui/Nav"
import Login from "./components/pages/LoginPage"
import SignUp from "./components/pages/SignUppage"
import Homepage from "./components/pages/Homepage"

function App() {
  return (
    <div className="bg-background w-full h-screen dark:text-foreground">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
      </Routes>
    </div>
  )
}
export default App