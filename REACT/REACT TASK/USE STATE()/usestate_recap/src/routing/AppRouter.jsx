import { Route, Routes } from "react-router-dom"
import Register from "../components/Register"
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import Layout from "../components/Layout"

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default AppRouter