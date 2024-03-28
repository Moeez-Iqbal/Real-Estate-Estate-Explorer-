import React, { useState } from "react";
import SignInImage from "../assets/SignIn.jpg";
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({
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
      const response = await axios.post(`http://localhost:3000/SignIn`, formData);
      console.log("SignIn Successfully", response.data);
      setFormData({ email: "", password: "" });
      navigate('/')
    } catch (error) {
      console.error("Error Signing Up Try again later", error);
      setError("Error signing In. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 bg-cover bg-center relative h-80%"
        style={{ backgroundImage: `url(${SignInImage})` }}
      ></div>

      <div className="flex-grow flex flex-col justify-center p-6 md:p-12 bg-emerald-300 shadow-lg ">
        <h1 className="text-3xl text-center md:text-left mb-7 text-black items-center">
          SignIn
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            value={formData.email}
            autoComplete="off"
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            value={formData.password}
            autoComplete="off"
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-black p-4 rounded-lg gap-2 text-white hover:bg-gray-900"
          >
            {loading ? `Loading...` : `SignIn`}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="flex gap-3 mt-2 text-black text-justify ">
          <p className="">Dont have an account?</p>
          <NavLink to="/signup" className="bg-black text-white hover:bg-yellow-300 rounded-md p-1">
            SignUp
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
