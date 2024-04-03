import React, { useState } from "react";
import SignupImage from "../assets/Signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";
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
      navigate('/sign-in');
    } catch (error) {
      console.error("Error Signing Up Try again later", error);
      setError("Error signing up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg r">
        <div className="md:w-1/2 bg-cover bg-center h-80%" style={{ backgroundImage: `url(${SignupImage})` }}></div>

        <div className="md:w-1/2 bg-gray-200 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl ml-36  mb-7 text-black">Sign Up</h1>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-5">
            <input
              type="text"
              id="username"
              placeholder="Name"
              className="border rounded-lg py-2 px-3"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="border rounded-lg py-2 px-3"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border rounded-lg py-2 px-3"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              disabled={loading}
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
            >
              {loading ? `Loading...` : `Sign Up`}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <OAuth />
          </form>
          <div className="text-center mt-10">
            <p>Do you have an account? <NavLink to="/sign-in" className="text-black hover:underline">Sign In</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
