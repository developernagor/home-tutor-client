import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../providers/AuthProvider'

function Login() {

  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState(false)
  const navigate = useNavigate();

  const {signInUser} = useContext(AuthContext)

  const handleLogin = async(e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    signInUser(email, password)
    .then(result =>{
      setUser(result.user)
      console.log(user)
      navigate("/dashboard")
    })
    .catch(error => {
      setLoginError(error.message);
      console.log(loginError)
      // optional: show error to user
    })
  }
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {/* Add Lottie animation here if needed */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 text-3xl font-bold">Login Now !</h1>
          <form 
          onSubmit={handleLogin}
           className="card-body p-2">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* {error && (
              <p className="text-sm text-red-500">
                <strong>Error:</strong> {error}
              </p>
            )} */}
            {/* {success && (
              <p className="text-sm text-green-500">
                <strong>Success:</strong> {success}
              </p>
            )} */}

            <div className="form-control">
              <button className="btn btn-primary" 
              // disabled={loading}
              >Login
                {/* {loading ? "Registering..." : "Register"} */}
              </button>
            </div>
          </form>

          {loginError && <p className='text-red-500'> Wrong user email or password</p>}
          <p>
            If you don't have an account, please
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
