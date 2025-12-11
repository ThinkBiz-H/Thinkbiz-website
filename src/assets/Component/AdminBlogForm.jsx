import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // path check karo
import { ref as dbRef, get, child, remove } from "firebase/database";

const AdminBlogForm = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Firebase
  const fetchBlogs = async () => {
    const rootRef = dbRef(db);
    try {
      const snapshot = await get(child(rootRef, "blogs"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setBlogs(blogsArray);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Delete blog by id
  const deleteBlog = async (blogId) => {
    try {
      await remove(dbRef(db, "blogs/" + blogId));
      alert("Blog deleted successfully");
      fetchBlogs(); // Refresh list after delete
    } catch (error) {
      alert("Failed to delete blog: " + error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-orange-500">
        Manage Blogs
      </h2>

      {/* Blog list */}
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map(({ id, title, date }) => (
            <li
              key={id}
              className="bg-gray-800 p-4 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-400 text-sm">
                  {date ? new Date(date).toLocaleDateString() : "No date"}
                </p>
              </div>
              <button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this blog?")
                  ) {
                    deleteBlog(id);
                  }
                }}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Yahan tum blog add karne ka form bhi bana sakte ho */}
    </div>
  );
};

export default AdminBlogForm;
