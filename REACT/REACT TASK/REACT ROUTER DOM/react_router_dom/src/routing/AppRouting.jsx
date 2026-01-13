import { Route, Routes } from "react-router-dom"
import MovieDetails from "../components/MovieDetails"
import Character from "../components/Character"
import Rating from "../components/Rating"
import BookNow from "../components/BookNow"
import Login from "../components/Login"
import Layout from "../components/Layout"

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<MovieDetails/>}/>
      <Route path="/character" element={<Character/>}/>
      <Route path="/booknow" element={<BookNow/>}/>
      <Route path="/rating" element={<Rating/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AppRouting