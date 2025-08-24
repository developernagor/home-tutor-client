import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function EmailSendToUser() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const user = {
    name: "Mehedi",
    email: "mehedihassannagor@gmail.com",
  };

  const sendEmail = async () => {
  if (!subject || !message) {
    toast.error("⚠️ Subject and message cannot be empty!");
    return;
  }

  try {
    setLoading(true);
    await axios.post(`${import.meta.env.VITE_API_URL}/send-email-all`, {
      subject,
      message,
    });
    toast.success("✅ Emails sent to all students!");
    setSubject("");
    setMessage("");
  } catch (error) {
    console.error(error);
    toast.error("❌ Failed to send emails");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="p-8 max-w-lg mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-2xl rounded-3xl border border-transparent hover:border-indigo-300 transition-all duration-300">
      <Toaster position="top-center" />

      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-700 animate-pulse">
        ✉️ Send Email
      </h2>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-4 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-gray-500 shadow-sm transition duration-300"
      />

      <textarea
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="6"
        className="w-full p-4 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-gray-500 shadow-sm transition duration-300"
      />

      <button
        onClick={sendEmail}
        disabled={loading}
        className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 transform ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl"
        }`}
      >
        {loading ? "⏳ Sending..." : "🚀 Send Email"}
      </button>
    </div>
  );
}

export default EmailSendToUser;
