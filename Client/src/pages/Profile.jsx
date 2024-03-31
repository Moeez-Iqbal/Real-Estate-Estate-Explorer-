import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-20 rounded-md shadow-lg">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-24 h-24 rounded-full cursor-pointer"
            src={currentUser.avatar}
            alt="Profile"
          />
          <form className="flex flex-col gap-4 w-full bg-gray-100 p-6 rounded-lg">
            <input
              type="text"
              id="username"
              className="input-field p-1"
              defaultValue={currentUser.username}
              placeholder="Username"
            />
            <input
              type="email"
              id="email"
              className="input-field p-1"
              defaultValue={currentUser.email}
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="input-field p-1"
              placeholder="Password"
            />
            <button className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 rounded-md p-1">
              Update Profile
            </button>
            <button className=" w-full bg-red-700 hover:bg-red-600 rounded-md p-1">
              Delete Account
            </button>
            <button className="btn btn-secondary w-full bg-gray-500 hover:bg-gray-600 rounded-md p-1">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
