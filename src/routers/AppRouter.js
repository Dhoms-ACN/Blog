import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
