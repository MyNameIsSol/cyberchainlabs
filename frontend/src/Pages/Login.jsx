// src/pages/Login.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-slate-800 p-6">
        <div className="w-full max-w-md bg-slate-900 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
            Welcome Back, Login
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-200"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 text-gray-200"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 text-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:scale-105 transition-transform"
            >
              Login
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              href="/signUp"
              className="font-medium text-pink-500 hover:text-fuchsia-500"
            >
              Register
            </a>
          </p>
        </div>
      </main>
    </div>
    <Footer />
    </div>
  );
}
