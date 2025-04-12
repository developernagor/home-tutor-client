import React from "react";
import { Link } from "react-router";

const DownloadPDF = () => {

  const academicBooks = [
    { class: "One", title: "Bangla", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1XFeh1kDvWoBtYza8jft5cwrPVhEcseD5/view" },
    { class: "One", title: "English", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1fEi4o-cRb-uIuXb0YllOylOLwPKg9003/view" },
    { class: "One", title: "Math", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1sQ9gxdNIKpsBwvbCfOV0Ek6Xmjw90W9B/view" },
    { class: "Two", title: "Bangla", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1VTG5E09kWhbMJGscXbbP0TUoxq_8DU64/view" },
    { class: "Two", title: "English", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1ztZFaOwbguKEwqZs_lvuyXsmJgMoUMgk/view" },
    { class: "Two", title: "Math", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1-9weJt3CeJnHO1zKBJHDAe0sndJwsZqi/view" },
    { class: "Three", title: "আমার বাংলা বই", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1oDk2l0nqtMTIHqLTPqHUuS-bX_CMsaYC/view" },
    { class: "Three", title: "English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1xlwFzemKHnD3cos1LEbmeEfQN8TmqSnQ/view" },
    { class: "Three", title: "প্রাথমিক গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1LDc6xGN3dHgKDp5L5mnbAm3ltAf5f-iI/view" },
    { class: "Three", title: "প্রাথমিক বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/17qdGxwZxFOlJY0qcyRwl_tNEJOltNbMG/view" },
    { class: "Three", title: "বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1jPioH7FZuh_YL3bArM79Msm8PohIoavk/view" },
    { class: "Three", title: "ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1GmzcsEUIcZo4DQLuMuRFzLo_XTM154l0/view" },
    { class: "Four", title: "আমার বাংলা বই", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1n3TZcBdT8LQppREBDU3h6oOhTmlGlrY_/view" },
    { class: "Four", title: "English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1O6Uot8tmM1sktx875bablzbXoB83A1JK/view" },
    { class: "Four", title: "প্রাথমিক গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1BIpqtGydNFcZ_fmFRhRuNHxd2AjcwGT6/view" },
    { class: "Four", title: "প্রাথমিক বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1I4tHlMPLoeCKHL_HbHgTC_UL9nOi33M7/view" },
    { class: "Four", title: "বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1u-YcHCshH8Zn9X04S6ZTzqJ8ebmLG-dJ/view" },
    { class: "Four", title: "ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1shmJzRTTZzGAdeKXgqFcBov1Oj5oBIOV/view" },
    { class: "Five", title: "আমার বাংলা বই", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1_l_RudEdfGF4bjPIAFHmkzkYpKPriFvK/view" },
    { class: "Five", title: "English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1mYMaa4iG8exP-HjtT_f7Jgss76o3Nd4H/view" },
    { class: "Five", title: "প্রাথমিক গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/18C-iB1tOSYG5qwBjRpV3NNivFqDvsCec/view" },
    { class: "Five", title: "প্রাথমিক বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1ru6RSNpp-F2MHDoIwZzkWQi5-Oq6RtqD/view" },
    { class: "Five", title: "বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1yLV_zwZNPLtj5YD-7UeS0Sa64lv6tm9a/view" },
    { class: "Five", title: "ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/15_VyasyRtA8MgLbpLIw1TRp6uhzAzWnJ/view" },
    { class: "Six", title:"চারুপাঠ", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1HMLLnPvoFbwdLUYOyuOYKkuTma6oI0gD/view" },
    { class: "Six", title:"আনন্দপাঠ", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/16L1WW3QTqQfai9aPayV0gyE5igRMiFeL/view" },
    { class: "Six", title:"বাংলা ব্যাকরণ ও নির্মিতি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1AQo5mMLwsMa_ASt0uYANyl7Cb7zaqq6i/view" },
    { class: "Six", title:"English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1aX0Py2PLwSgh-NVUsTqfI0bqEplYo7WV/view" },
    { class: "Six", title:"গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/13iUtxnh9u1Q6rFU0gyvpPGLeCSGCEpc7/view" },
    { class: "Six", title:"তথ্য ও যোগাযোগ প্রযুক্তি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1u2zRiyNz6ekcFMRskixrrCUxCyJQHDkr/view" },
    { class: "Six", title:"বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1F2v5Pf6br3lu_WChJ1fwiYwyct_Fs6UX/view" },
    { class: "Six", title:"বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1EPRUddjMf4jjogGagq6J7Rll1OhZRwmk/view" },
    { class: "Six", title:"কৃষিশিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1H9OqVnqoCB63MgLkgWunue4EGE6YzS9D/view" },
    { class: "Six", title:" গার্হস্থ্যবিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1FOF9ie0plvrxpSlsL0MIGsExNd5GQX-j/view" },
    { class: "Six", title:"ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1uW6-dw-0KlszZ8AQjq5SDE2elq5eZYsN/view" },
    { class: "Seven", title:"সপ্তবর্ণা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/15IDsWA0wqIThNLuq8n9ijOsRwXUQJftp/view" },
    { class: "Seven", title:"আনন্দপাঠ", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1CwvHeLDkUGJU8_r6ChsRSYNs2PBXhRCE/view" },
    { class: "Seven", title:"বাংলা ব্যাকরণ ও নির্মিতি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1gWHxsoJk2BFQ03RmoPIkd-nn5-wZTvJC/view" },
    { class: "Seven", title:"English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1XTG6vE0RSM645eE5-XAKMirCzGUPPllz/view" },
    { class: "Seven", title:"গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1iKHx1wxYi7I6REjR-5j8fW1uVI2xT5zH/view" },
    { class: "Seven", title:"তথ্য ও যোগাযোগ প্রযুক্তি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1LCG5mQF2hEwCMKXeZDsPCKjbSdaxzlql/view" },
    { class: "Seven", title:"বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1Rjkz4Hjp04VbxMnVZy1Eht1F5O62pmvR/view" },
    { class: "Seven", title:"বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1lb7bQEzhSLG0hZZ9y14GCmhcmxjWpa15/view" },
    { class: "Seven", title:"কৃষিশিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1HYtDOWnpMrWYefOk5mZWn8-uMCsCpNUR/view" },
    { class: "Seven", title:"গার্হস্থ্যবিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1N5fgmRdPnK2iYoh_cDNDU5pWDQR2c4F6/view" },
    { class: "Seven", title:"ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1sLsI5_oGua43iWq2-s7mzLWnAIZ_xw21/view" },
    { class: "Eight", title:"সাহিত্য-কণিকা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/14Hg8HRdcjqnhy2raqoAbHL8oHLUbUSwA/view" },
    { class: "Eight", title:"আনন্দপাঠ", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1fm9ocm4MA3n3SFRpX8KM8sNN0-8Wl_ap/view" },
    { class: "Eight", title:"বাংলা ব্যাকরণ ও নির্মিতি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/117pXoJyf_LnJgxOy7R9-HcYMOGHeh2cq/view" },
    { class: "Eight", title:"English For Today", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1N7E-_Dgd1xX5VC4GmJamf4Yo4VEzvTvu/view" },
    { class: "Eight", title:"গণিত", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1UTGLGuQxMMaK_YgErIivbMI_3PcvkRbc/view" },
    { class: "Eight", title:"তথ্য ও যোগাযোগ প্রযুক্তি", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/152cFSzvuZOrWo_BuYhgMav91g8pRpv9I/view" },
    { class: "Eight", title:"বাংলাদেশ ও বিশ্বপরিচয়", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1HIxFLkgo4ZLG-qUz2achu5K_v40T0cfn/view" },
    { class: "Eight", title:"বিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1a5-WIfGsqunOpFz55nCL-AK2y5XVs7zB/view" },
    { class: "Eight", title:"কৃষিশিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1hpNzkGvJ6Q5efgSB7-Dtt1FnSYrh3zZu/view" },
    { class: "Eight", title:"গার্হস্থ্যবিজ্ঞান", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1vODdjg4T1KhM1G9bGgCMPOuGO8Bz8Wp_/view" },
    { class: "Eight", title:"ইসলাম শিক্ষা", author: "NCTB", pdfUrl: "https://drive.google.com/file/d/1108SRYaCP3Po5M3DU1lWe8ZtIhLFTloJ/view" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
    { class: "Nine-Ten", title:"", author: "NCTB", pdfUrl: "" },
  ]
  
  const nonAcademicBooks = [
    {
      title: "Bangla",
      author: "NCTB",
      pdfUrl: "", 
    },
    {
      title: "English",
      author: "NCTB",
      pdfUrl: "",
    },
    {
      title: "Math",
      author: "NCTB",
      pdfUrl: "",
    },
  ];

  return (
    <div>
      <div className="p-8 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Academic PDF Book Downloads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-1 md:py-3 md:px-6 text-center">Class</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Book Name</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Author</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {academicBooks.map((book, index) => (
              <tr key={index} 
              className={`
                border-b transition-all hover:scale-[1.01] hover:shadow-md 
                ${book.class === "One" ? "bg-red-100" : 
                book.class === "Two" ? "bg-amber-100" : 
                book.class === "Three" ? "bg-purple-100" : 
                book.class === "Four" ? "bg-green-100" : 
                book.class === "Five" ? "bg-gray-100" : 
                book.class === "Six" ? "bg-violet-100" : 
                book.class === "Seven" ? "bg-yellow-100" : 
                book.class === "Eight" ? "bg-orange-100" : 
                book.class === "Nine-Ten" ? "bg-blue-100" : 
                "bg-white"}
              `}>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.class}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.title}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.author}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">
                  <Link to={book.pdfUrl} target="_blank">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:py-2 md:px-4 rounded">
                    Download
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Non Academic PDF Book Downloads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-1 md:py-3 md:px-6 text-center">Book Name</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Author</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {nonAcademicBooks.map((book, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-1 md:py-3 md:px-6 text-center">{book.title}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.author}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">
                  <Link to={book.pdfUrl} target="_blank">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:py-2 md:px-4 rounded">
                    Download
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DownloadPDF;
