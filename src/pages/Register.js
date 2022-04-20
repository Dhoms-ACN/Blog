import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

const Register = () => {
  const fields = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
  }

  const [data, setData] = useState(fields)
  const registerUser = (e) => {
    e.preventDefault()
    axios.post('/sign-in', data).then(response => console.log(response.data))
    .catch(e => console.log(e))
  }
  return (
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
                value={data.first_name}
                onChange={(e) => setData({...data, first_name: e.target.value})}
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Last Name"
                value={data.last_name}
                onChange={(e) => setData({...data, last_name: e.target.value})}
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="email"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                onClick={registerUser}
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
};

export default Register;
