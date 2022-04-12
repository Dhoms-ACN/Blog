import Navbar from "./Navbar";

const Header = () => (
  <>
    <Navbar />
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center py-12">
        <button
          className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          href="#"
        >
          Minimal Blog
        </button>
        <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
      </div>
    </header>
    <nav
      className="w-full py-4 border-t border-b bg-gray-100"
      x-data="{ open: false }"
    >
      <div className="block sm:hidden">
        <button
          href="#"
          className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          // @click="open = !open"
        >
          Topics
          {/* <i :className="open ? 'fa-chevron-down': 'fa-chevron-up'" className="fas ml-2"></i> */}
        </button>
      </div>
      <div className="block w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Technology
          </button>
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Automotive
          </button>
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Finance
          </button>
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Politics
          </button>
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Culture
          </button>
          <button href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Sports
          </button>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
