import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";

const Career = () => {
  const [jobs, setJobs] = useState([]);

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
          {jobs.map(({ id, title, description, location }) => (
            <li
              key={id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-3xl font-bold text-orange-400 mb-2">
                {title}
              </h2>
              <p className="mb-4">{description}</p>
              <p className="italic text-gray-400">Location: {location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Career;
