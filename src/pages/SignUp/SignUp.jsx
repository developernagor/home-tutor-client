import React, { useContext, useState } from "react";
import { useNavigate } from "react-router"; // Fix useNavigate import
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router"; // Fix missing Link import

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

function SignUp() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      setLoading(false);
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase letter.");
      setLoading(false);
      return;
    }
    if (!/[#?!@$%^&*-]/.test(password)) {
      setError("Password should have at least one special character.");
      setLoading(false);
      return;
    }

    try {
      if (!image) {
        throw new Error("No image file selected");
      }

      const imageFormData = new FormData();
      imageFormData.append("image", image);

      // Upload image to ImgBB
      const imgRes = await axios.post(image_hosting_api, imageFormData);

      if (imgRes.data.success) {
        const photoURL = imgRes.data.data.url;

        // Create user with Firebase
        const userCredential = await createUser(email, password);
        const user = userCredential.user;

        // Update profile with displayName and photoURL
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });

        setSuccess("User registered successfully!");
        form.reset();
        navigate("/login");
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {/* Add Lottie animation here if needed */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body p-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

            {error && (
              <p className="text-sm text-red-500">
                <strong>Error:</strong> {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-green-500">
                <strong>Success:</strong> {success}
              </p>
            )}

            <div className="form-control">
              <button className="btn btn-primary" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <p>
            If you already have an account, please{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
