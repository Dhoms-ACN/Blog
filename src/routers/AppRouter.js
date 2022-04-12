import { Routes, Route } from "react-router-dom"
import Blog from '../pages/Blog'
import About from "../pages/About"

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
)

export default AppRouter