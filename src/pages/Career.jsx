import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";

import ApplyFrom from "../assets/Component/ApplyFrom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, "jobs"));
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

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-12 text-orange-500 text-center">
        Career Opportunities
      </h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-400">No job openings currently.</p>
      ) : (
        <ul className="space-y-8">
          {jobs.map(
            ({ id, title, description, experience, salary, deadline }) => (
              <li
                key={id}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col md:flex-row"
              >
                <div className="md:w-1/5 w-full pr-0 md:pr-6 mb-4 md:mb-0 flex items-center">
                  <h2 className="text-3xl font-bold text-orange-400">
                    {title}
                  </h2>
                </div>

                <div className="md:w-4/5 w-full flex flex-col justify-between">
                  <p className="mb-6 break-words whitespace-normal">
                    {description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-300 text-sm mb-4 gap-2">
                    <h1 className="font-semibold text-2xl text-white">
                      Experience: {experience || "N/A"}
                    </h1>
                    <h1 className="font-semibold text-2xl text-white">
                      Salary: {salary || "N/A"}
                    </h1>
                    <h1 className="font-semibold text-2xl text-white">
                      Deadline: {deadline || "N/A"}
                    </h1>
                  </div>

                  <div>
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition"
                      onClick={() => {
                        setSelectedJob(title);
                        setShowModal(true);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}

      {showModal && (
        <ApplyFrom jobTitle={selectedJob} onClose={() => setShowModal(false)} />
      )}
      {/* Toast container yahan add karo */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <WhatsAppButton />
    </div>
  );
};

export default Career;
