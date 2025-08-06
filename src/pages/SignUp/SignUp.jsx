import React, { useContext, useState } from "react";
import { useNavigate } from "react-router"; // ✅ Corrected import
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router"; // ✅ Corrected import
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function SignUp() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser, handleUploadImage } = useContext(AuthContext);

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
      if (!image) throw new Error("No image file selected");

      // ✅ Upload image using context method
      const photoURL = await handleUploadImage(image);
      if (!photoURL) throw new Error("Image upload failed");

      // ✅ Create user with Firebase
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // ✅ Update Firebase Auth Profile
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      setSuccess("User registered successfully! Redirecting to login...");
      form.reset();

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="label-text">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="label-text">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="label-text">
              Photo
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              name="image"
              required
              className="file-input file-input-bordered w-full mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="label-text">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              <strong>Error:</strong> {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 text-sm">
              <strong>Success:</strong> {success}
            </p>
          )}

          <div className="flex justify-center">
            <button
              className="btn btn-primary w-full mt-4 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
