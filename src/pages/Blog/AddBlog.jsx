import axios from 'axios';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 

function AddBlog() {

    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    const [addBlogData, setAddBlogData] = useState({
        blogTitle: "",
        blogImage: null,
        blogCategory: "", 
        blogDescription: ""
    })
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


    const handleInputChange = (e) => {
        const {name, value} = e.target;
            setAddBlogData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleImageChange = (e) => {
        setAddBlogData((prevData) => ({
          ...prevData,
          blogImage: e.target.files[0],
        }));
      };


    const handleSubmitBlogData = async( e ) => {
        e.preventDefault();

        const blogId = uuidv4();
console.log(blogId)
  
    let uploadedImageUrl = null;

    if (addBlogData.blogImage) {
      const formData = new FormData();
      formData.append("image", addBlogData.blogImage);

      try {
        setLoading(true);
        const res = await axios.post(image_hosting_api, formData);
        uploadedImageUrl = res.data.data.display_url;
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError((prevErrors) => ({
          ...prevErrors,
          blogImage: "Image upload failed. Please try again.",
        }));
        return;
      }
    }


    // Prepare final note data for submission
    const finalAddBlogData = {
      ...addBlogData,
      blogId: blogId,
      blogUploadTime: new Date(),
      blogImage: uploadedImageUrl,
    };

    if (!addBlogData.blogTitle || !addBlogData.blogDescription || !addBlogData.blogCategory ) {
      setError({ form: "Please fill in all fields!" });
      return;
    }

    // Send data to backend
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/blog`,
        finalAddBlogData
      );
      console.log("Blog Added:", response.data);
      setSuccessMessage("Blog added successfully!");

      // Reset form after successful submission
      setAddBlogData({
        blogId: uuidv4(),
        blogTitle: "",
        blogCategory: "",
        blogDescription: "",
        blogImage: null,
      });

      console.log(error)
      setError({});
    } catch (error) {
      console.log("Error adding solution:", error.message);
    }



}

  return (
    <div>
      <div className="add-blog-title">
        <h1 className='text-center text-3xl font-bold py-4'>Add Your Blog</h1>
      </div>

      <form onSubmit={handleSubmitBlogData}>
        <div className='flex flex-col gap-2'>
            <label>Blog Title</label>
            <input 
            type="text" 
            name='blogTitle' 
            value={addBlogData.blogTitle} 
            onChange={handleInputChange}
            className='border rounded-lg p-2'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Blog Image</label>
            <input 
            type="file" 
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleImageChange}
            className='border rounded-lg p-2'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Blog Category</label>
            <input 
            type="text" 
            name='blogCategory' 
            value={addBlogData.blogCategory} 
            onChange={handleInputChange}
            className='border rounded-lg p-2'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Blog Description</label>
            <textarea 
            type="text" 
            name='blogDescription' 
             
            onClick={handleInputChange}
            className='border rounded-lg p-2'
            />
        </div>
        <div className='my-4 text-center'>
            {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          disabled={loading}
        >
          {loading ? "Adding blog..." : "Add Blog"}
        </button>
        </div>
      </form>
    </div>
  )

}

export default AddBlog
