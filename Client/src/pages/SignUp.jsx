import React, { useState } from "react";
import SignupImage from "../assets/Signup.jpg";
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

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
      navigate('/signin')
    } catch (error) {
      console.error("Error Signing Up Try again later", error);
      setError("Error signing up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${SignupImage})` }}
      ></div>

      <div className="flex-grow flex flex-col justify-center p-6 md:p-12 bg-slate-300 shadow-lg ">
        <h1 className="text-3xl text-center md:text-left mb-7 text-black items-center">
          Signup
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            id="username"
            placeholder="Enter your Name"
            className="border p-3 rounded-lg"
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
            className="bg-black p-4 rounded-lg gap-2 text-white hover:bg-gray-900"
          >
            {loading ? `Loading...` : `SignUp`}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="flex gap-3 mt-2 text-black text-justify ">
          <p className="">Do you have an account?</p>
          <NavLink to="/signin" className="text-black hover:underline">
            SignIn
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
