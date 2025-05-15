import React from "react";
import { Link } from "react-router"; 

const Notice = () => {
  const notices = [
    { id: 1, title: "🎉 SSC Exam Routine 2025 (সংশোধিত সময়সূচি)", link: "https://drive.google.com/file/d/14lj6ECiR84DXx41PRzNBOHJRIlWNR0iU/view?usp=sharing" },
    
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">📢 Latest Notices</h2>

      <div className="overflow-hidden bg-white rounded-xl border">
        <div className="animate-slide flex flex-col p-2">
          {notices.slice(0,10).map((notice) => (
            <Link
              key={notice.id}
              to={notice.link}
              target="_blank"
              className="text-black font-semibold mb-2 hover:text-purple-600"
            >
              {notice.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notice;
