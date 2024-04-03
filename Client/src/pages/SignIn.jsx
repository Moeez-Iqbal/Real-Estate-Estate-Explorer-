import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import SignInImage from "../assets/SignIn.jpg";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const error = useSelector(state => state.user.error); 
  const loading = useSelector(state => state.user.loading); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await axios.post(`http://localhost:3000/SignIn`, formData);
      console.log("SignIn Successfully", response.data);
      setFormData({ email: "", password: "" });
      dispatch(signInSuccess(response.data)); 
      navigate('/Profile');
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
        <div className="md:w-1/2 bg-cover bg-center h-80%" style={{ backgroundImage: `url(${SignInImage})` }}></div>

        <div className="md:w-1/2 bg-gray-200 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl mb-7 ml-36">Sign In</h1>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-5">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="border rounded-lg py-2 px-3"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border rounded-lg py-2 px-3"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
            <button
              disabled={loading}
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
            >
              {loading ? `Loading...` : `Sign In`}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <OAuth />
          </form>
          <div className="text-center mt-10">
            <p>Don't have an account? <NavLink to="/sign-up" className="text-blue-500 hover:underline">Sign Up</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
