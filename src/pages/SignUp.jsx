// src/components/SignUp.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const SignUp = ({ onSignUp, onCancel }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Assume successful sign-up for simplicity
    onSignUp(username, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-200 ml-2"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
            <p className="mt-2 text-sm text-gray-600">
            Don't have an account? <Link to="/login" className="text-blue-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
