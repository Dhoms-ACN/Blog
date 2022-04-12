import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full py-4 bg-blue-800 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white no-underline">
          <li>
            <Link
              className="hover:text-gray-200 hover:underline px-4"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-200 hover:underline px-4"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center font-bold text-sm no-underline text-white pr-6">
        <Link to="/login">
          Login
        </Link>
        <Link className="pl-6" to="/register">
          Register
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
