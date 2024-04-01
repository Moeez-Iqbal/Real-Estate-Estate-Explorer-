import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';


function Profile() {
  const currentUser = useSelector(state => state.user.currentUser);
  const fileRef = useRef(null);
  const [file, setFile] = useState(0);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
 

  
 const dispatch = useDispatch();
 
  


  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axios.put(
        `http://localhost:3000/update/${currentUser.user.id}`,
        formData, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(updateUserSuccess(res.data));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
  

  return (
    <>
      <div></div>
      <div className='p-3 max-w-md mt-28 mx-auto mb-12 border-x-2 border-y-2 border-black shadow-lg rounded-md bg-gray-300'>
        <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <form
          onSubmit={handleSubmit}
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          className='flex flex-col gap-4'
        >
          <input 
          type='file' 
          ref={fileRef} 
          hidden accept='image/*' />

          <img
            src={formData.avatar || currentUser?.user.avatar}
            onClick={() => fileRef.current.click()}
            alt='profile'
            className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
          />

          <p className='text-center'>
            {fileUploadError ? (
              <span className='text-red-700'>
                Error Image upload (image must be less than 2 mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className='text-slate-700 text-center'>{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className='text-green-700 text-center'>Image successfully uploaded!</span>
            ) : (
              ''
            )}
          </p>

          <input
            type='text'
            placeholder='username'
            id='username'
            defaultValue={currentUser.user.username}
            onChange={handleChange}
            className='border p-3 rounded-lg'
          />

          <input
            type='email'
            placeholder='email'
            id='email'
            defaultValue={currentUser.user.email}
            onChange={handleChange}
            className='border p-3 rounded-lg'
          />

          <input
            type='password'
            placeholder='password'
            id='password'
            onChange={handleChange}
            className='border p-3 rounded-lg'
          />

          <button className='bg-red-700 text-white rounded-lg p-3 uppercase hover:bg-gray-700'>
            update
          </button>
        </form>
        <div className='flex flex-col justify-between mt-5 gap-4 text-center'>
          <div className='bg-blue-700 text-white rounded-lg p-3 cursor-pointer hover:bg-gray-700'>
            Delete account
          </div>
          <div className='bg-yellow-500 text-white rounded-lg p-3 cursor-pointer hover:bg-gray-700'>
            Sign out
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
