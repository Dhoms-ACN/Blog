const Navbar = () => (
  <nav className="w-full py-4 bg-blue-800 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <button
              className="hover:text-gray-200 hover:underline px-4"
              href="#"
            >
              Shop
            </button>
          </li>
          <li>
            <button
              className="hover:text-gray-200 hover:underline px-4"
              href="#"
            >
              About
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex items-center font-bold text-sm no-underline text-white pr-6">
        <button className="" href="#">
          Login
        </button>
        <button className="pl-6" href="#">
          Register
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
