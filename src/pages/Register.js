import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

const Register = () => {
  const initialValues = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
  }

  const [formData, setFormData] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})


  const registerUser = (e) => {
    e.preventDefault()
    setFormErrors(validateForm(formData))
    if(Object.keys(formErrors).length === 0) {
      axios.post('/sign-in', formData)
        .then(response => console.log(response.data))
        .catch(e => {
          //in case front end validation fail's run backend validation
          const { errors } = e.response.data 
          const keys = Object.keys(errors)
          const validationErrors  = {}
          keys.forEach(key => {
              validationErrors[key] = errors[key].message
          })
          setFormErrors({...formErrors, ...validationErrors})
        })
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = (data) => {
    const errors = {}
    if (!data.first_name) {
      errors.first_name = "First name is required"
    }
    if (!data.last_name) {
      errors.last_name = "Last name is required"
    }
    if (!data.email) {
      errors.email = "Email is required"
    }
    if (!data.password) {
      errors.password = "Password is required"
    }
    if(data.password !== data.confirm_password) {
      errors.password = "Password did not match"
    }

    return errors
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={registerUser}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Register
            </h1>
            <div className="py-2 text-left">
              <input
                type="text"
                name="first_name"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
              {formErrors.first_name && <span className="text-red-400 text-sm ml-2">{formErrors.first_name}</span>}
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              {formErrors.last_name && <span className="text-red-400 text-sm ml-2">{formErrors.last_name}</span>}
            </div>
            <div className="py-2 text-left">
              <input
                type="email"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
               {formErrors.email && <span className="text-red-400 text-sm ml-2">{formErrors.email}</span>}
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
               {formErrors.password && <span className="text-red-400 text-sm ml-2">{formErrors.password}</span>}
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
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
};

export default Register;
