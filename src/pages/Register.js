import { Link } from "react-router-dom";

const Register = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex flex-1 items-center justify-center">
      <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
        <form className="text-center">
          <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
            Register
          </h1>
          <div className="py-2 text-left">
            <input
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="First Name"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Last Name"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="email"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Email"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="password"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Password"
            />
          </div>
          <div className="py-2">
            <button
              type="submit"
              className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="#" className="hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="text-center mt-12">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
