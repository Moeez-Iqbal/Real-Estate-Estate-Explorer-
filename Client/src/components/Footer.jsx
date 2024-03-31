import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";


export default function Footer() {
    return (
        <footer className="bg-stone-400 shadow-sm border-y-2 border-black border-x-2">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src= {logo}
                                className="h-20"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:bg-gray-700 p-3 rounded-md">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:bg-gray-700 p-3 rounded-md">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Moeez-Iqbal"
                                        className="hover:bg-gray-700 p-3 rounded-md"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                <a
                                        href="https://linkedin.com/Moeez-Iqbal"
                                        className="hover:bg-gray-700 p-3 rounded-md"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:bg-gray-700 p-3 rounded-md">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:bg-gray-700 p-3 rounded-md">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center">
                        © 2023  MoeezIqbal 
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}