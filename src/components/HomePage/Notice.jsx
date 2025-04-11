import React from "react";
import { Link } from "react-router"; 

const Notice = () => {
  const notices = [
    { id: 1, title: "🎉 School Reopening on April 15!", link: "" },
    { id: 2, title: "📝 Exam Schedule Released!", link: "" },
    { id: 3, title: "🏖️ Holiday on May 1st!", link: "" },
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
