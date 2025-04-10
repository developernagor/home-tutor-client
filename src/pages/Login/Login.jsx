import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; // ✅ fixed: should be 'react-router-dom'
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const { signInUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInUser(email, password);
      console.log(result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
      setLoginError("Wrong email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <div className="text-right mt-1">
              <Link to="#" className="text-xs text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {loginError && (
            <p className="text-sm text-red-500 font-semibold">{loginError}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 tracking-wide transition duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
