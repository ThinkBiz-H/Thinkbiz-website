import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { ref as dbRef, push, get, child, remove } from "firebase/database";

import AdminBlogForm from "../assets/Component/AdminBlogForm.jsx"; // sahi path se import karo

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Job related states
  const [jobs, setJobs] = useState([]);
  const [jobForm, setJobForm] = useState({
    title: "",
    description: "",
    location: "",
    experience: "",
    salary: "",
    deadline: "",
    jobType: "",
  });

  // Toggle states for showing job form or blog form
  const [showJobForm, setShowJobForm] = useState(true);
  const [showBlogForm, setShowBlogForm] = useState(false);

  // Listen for login state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) fetchJobs();
      else setJobs([]);
    });
    return () => unsubscribe();
  }, []);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  // Logout handler
  const handleLogout = () => {
    signOut(auth);
  };

  // Fetch jobs from Firebase
  const fetchJobs = async () => {
    const rootRef = dbRef(db);
    try {
      const snapshot = await get(child(rootRef, "jobs"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const jobsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setJobs(jobsArray);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Add new job
  const handleJobSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      description,
      location,
      experience,
      salary,
      deadline,
      jobType,
    } = jobForm;

    if (
      !title ||
      !description ||
      !location ||
      !experience ||
      !salary ||
      !deadline ||
      !jobType
    ) {
      alert("Please fill all fields correctly");
      return;
    }

    try {
      await push(dbRef(db, "jobs"), jobForm);
      alert("Job added successfully");
      setJobForm({
        title: "",
        description: "",
        location: "",
        experience: "",
        salary: "",
        deadline: "",
        jobType: "",
      });
      fetchJobs();
    } catch (error) {
      alert("Failed to add job: " + error.message);
    }
  };

  // Delete job
  const deleteJob = async (jobId) => {
    try {
      await remove(dbRef(db, "jobs/" + jobId));
      alert("Job deleted successfully");
      fetchJobs();
    } catch (error) {
      alert("Failed to delete job: " + error.message);
    }
  };

  // LOGIN UI
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <form
          onSubmit={handleLogin}
          className="max-w-md w-full space-y-6 bg-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Admin Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-orange-500">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setShowJobForm(true);
            setShowBlogForm(false);
          }}
          className={`px-6 py-3 rounded font-semibold ${
            showJobForm ? "bg-orange-500" : "bg-gray-700"
          }`}
        >
          Job Upload
        </button>

        <button
          onClick={() => {
            setShowJobForm(false);
            setShowBlogForm(true);
          }}
          className={`px-6 py-3 rounded font-semibold ${
            showBlogForm ? "bg-orange-500" : "bg-gray-700"
          }`}
        >
          Blog Upload
        </button>
      </div>

      {/* Conditional Rendering */}

      {showJobForm && (
        <div>
          {/* ADD JOB FORM */}
          <form
            onSubmit={handleJobSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-lg mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>

            <input
              type="text"
              placeholder="Job Title"
              value={jobForm.title}
              onChange={(e) =>
                setJobForm({ ...jobForm, title: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            />

            <textarea
              placeholder="Job Description"
              value={jobForm.description}
              onChange={(e) =>
                setJobForm({ ...jobForm, description: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white resize-none"
              rows={4}
            ></textarea>

            <input
              type="text"
              placeholder="Location"
              value={jobForm.location}
              onChange={(e) =>
                setJobForm({ ...jobForm, location: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            />

            <input
              type="text"
              placeholder="Experience"
              value={jobForm.experience}
              onChange={(e) =>
                setJobForm({ ...jobForm, experience: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            />

            <input
              type="text"
              placeholder="Salary"
              value={jobForm.salary}
              onChange={(e) =>
                setJobForm({ ...jobForm, salary: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            />

            <input
              type="date"
              value={jobForm.deadline}
              onChange={(e) =>
                setJobForm({ ...jobForm, deadline: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            />

            <select
              value={jobForm.jobType}
              onChange={(e) =>
                setJobForm({ ...jobForm, jobType: e.target.value })
              }
              className="w-full p-3 rounded bg-gray-700 text-white"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>

            <button
              type="submit"
              className="bg-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Add Job
            </button>
          </form>

          {/* JOB LIST */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Current Job Listings
            </h2>

            {jobs.length === 0 && <p>No jobs found.</p>}

            <ul className="space-y-4">
              {jobs.map(
                ({
                  id,
                  title,
                  description,
                  location,
                  experience,
                  salary,
                  deadline,
                  jobType,
                }) => (
                  <li key={id} className="bg-gray-800 p-4 rounded">
                    <h3 className="text-xl font-bold text-orange-400">
                      {title}
                    </h3>
                    <p>{description}</p>
                    <p className="italic text-gray-400">Location: {location}</p>
                    <p className="italic text-gray-400">
                      Experience: {experience}
                    </p>
                    <p className="italic text-gray-400">Salary: {salary}</p>
                    <p className="italic text-gray-400">Job Type: {jobType}</p>
                    <p className="italic text-gray-400">
                      Deadline:{" "}
                      {deadline
                        ? new Date(deadline).toLocaleDateString()
                        : "N/A"}
                    </p>

                    <button
                      onClick={() => deleteJob(id)}
                      className="mt-3 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}

      {showBlogForm && <AdminBlogForm />}
    </div>
  );
};

export default Admin;
