import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  //Firebase Storage
  // allow read;
  // allow write: if
  // request.resource.size < 3 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const Storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(Storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-20 rounded-md shadow-lg mt-1 mb-1">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded shadow-lg border-x-2 border-y-2 border-black">
        <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
        <div className="flex flex-col gap-4 items-center">
          <img
            onClick={() => fileRef.current.click()}
            className="w-24 h-24 rounded-full cursor-pointer"
            src={formData.avatar || currentUser.avatar}
            alt="Profile"
          />

<p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>

          <form className="flex flex-col gap-4 w-full bg-gray-100 p-6 rounded-lg">
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileRef}
              hidden
              accept="image/.*"
            />
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
