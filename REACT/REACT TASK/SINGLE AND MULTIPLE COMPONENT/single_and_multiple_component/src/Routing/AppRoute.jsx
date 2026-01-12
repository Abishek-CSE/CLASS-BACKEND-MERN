import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import About from "../Components/About"
import Book from "../Components/Book"

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  )
}

export default AppRoute
