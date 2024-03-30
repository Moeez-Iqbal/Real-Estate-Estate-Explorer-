import React, { useState } from "react";
import SignInImage from "../assets/SignIn.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Corrected import statement
import axios from "axios";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const error = useSelector(state => state.user.error); 
  const loading = useSelector(state => state.user.loading); 
  const dispatch = useDispatch();
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
      dispatch(signInStart());
      const response = await axios.post(`http://localhost:3000/SignIn`, formData);
      console.log("SignIn Successfully", response.data);
      setFormData({ email: "", password: "" });
      dispatch(signInSuccess(response.data)); 
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 bg-cover bg-center relative h-80%"
        style={{ backgroundImage: `url(${SignInImage})` }}
      ></div>

      <div className="flex-grow flex flex-col justify-center p-6 md:p-12 bg-emerald-100 shadow-lg ">
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
          <p className="">Don't have an account?</p>
          <NavLink to="/signup" className="bg-black text-white hover:bg-gray-800 rounded-md p-1">
            SignUp
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
