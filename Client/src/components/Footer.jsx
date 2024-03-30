import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex">
          <a href="/" className="text-sm text-gray-300 hover:text-white mr-4">Home</a>
          <a href="/" className="text-sm text-gray-300 hover:text-white mr-4">Contact Us</a>
          <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white mr-4">LinkedIn</a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer