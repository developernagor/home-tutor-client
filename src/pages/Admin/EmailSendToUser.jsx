import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function EmailSendToUser() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(""); // for single email
  const [loading, setLoading] = useState(false);
  const [sendToAll, setSendToAll] = useState(true); // toggle mode

  const sendEmail = async () => {
    if (!subject || !message) {
      toast.error("⚠️ Subject and message cannot be empty!");
      return;
    }

    try {
      setLoading(true);

      if (sendToAll) {
        // ✅ Send to all
        await axios.post(`${import.meta.env.VITE_API_URL}/send-email-all`, {
          subject,
          message,
        });
        toast.success("✅ Emails sent to all students!");
      } else {
        // ✅ Send to single
        if (!email) {
          toast.error("⚠️ Please enter an email address");
          return;
        }
        await axios.post(`${import.meta.env.VITE_API_URL}/send-email-single`, {
          to: email,
          subject,
          message,
        });
        toast.success("✅ Email sent to single student!");
      }

      setSubject("");
      setMessage("");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-2xl rounded-3xl border border-transparent hover:border-indigo-300 transition-all duration-300">
      <Toaster position="top-center" />

      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-700">
        ✉️ Send Email
      </h2>

      {/* Toggle send mode */}
      <div className="flex gap-4 mb-4 justify-center">
        <button
          className={`px-4 py-2 rounded-xl font-bold ${
            sendToAll ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSendToAll(true)}
        >
          Send to All
        </button>
        <button
          className={`px-4 py-2 rounded-xl font-bold ${
            !sendToAll ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSendToAll(false)}
        >
          Send to One
        </button>
      </div>

      {/* Email input (only for single mode) */}
      {!sendToAll && (
        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-gray-500 shadow-sm transition duration-300"
        />
      )}

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
