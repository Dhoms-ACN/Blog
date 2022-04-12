import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
