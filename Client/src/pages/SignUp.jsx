import React, { useState } from "react";
import SignupImage from "../assets/Signup.jpg";
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:3000/SignUp`, formData);
      console.log("SignUp Successfully", response.data);
      setFormData({ username: "", email: "", password: "" });
      navigate('/sign-in')
    } catch (error) {
      console.error("Error Signing Up Try again later", error);
      setError("Error signing up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen mt-12">
      <div
        className="md:w-1/2 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${SignupImage})` }}
      ></div>

      <div className="flex-grow flex flex-col justify-center p-6 md:p-12 bg-emerald-300 shadow-lg border-l border-r border-t border-black">
        <h1 className="text-3xl text-center md:text-left mb-7 text-black items-center">
          <span className="ml-56 text-black  p-2 rounded-lg mt-2 border-x-2 border-y-2 border-black hover:bg-gray-500">SignUp</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input                      
          
            type="text"
            id="username"
            placeholder="Enter your Name"
            className=" p-3 rounded-lg "
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            value={formData.password}
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-black p-4 rounded-lg gap-2 text-white hover:bg-gray-600"
          >
            {loading ? `Loading...` : `SignUp`}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <OAuth />
        </form>
        <div className="flex gap-3 flex-col text-black text-center mt-10 ">
          <p className="">Do you have an account?</p>
          <NavLink to="/sign-in" className="bg-black text-white hover:bg-gray-800 rounded-md p-3 mx-56">
            SignIn
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
