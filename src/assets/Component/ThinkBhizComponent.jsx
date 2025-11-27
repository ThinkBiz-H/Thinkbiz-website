import React, { useState, useEffect } from "react";

const texts = [
  "Grow your business with us",
  "Innovative Solutions",
  "Expert IT Services",
  "Digital Marketing Strategies",
];

const ThinkBhizComponent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleConfirm = () => {
    if (!selectedDate) {
      alert("Please select a date first");
      return;
    }
    const phoneNumber = "918512001218";
    const message = encodeURIComponent(
      `Hello! I want to schedule a meeting on ${selectedDate}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setShowCalendar(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="max-w-8xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 font-sans"
      style={{ backgroundColor: "#ff7515" }}
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-bold text-black-500 uppercase tracking-widest mb-12 font-bold">
          Welcome to ThinkBiz-----
        </p>

        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-gray-900 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "3rem" }}
        >
          {texts[currentTextIndex]}
        </h2>

        <p className="text-gray-700 mb-8 max-w-md font-semibold">
          We provide top-notch software development, digital marketing, and IT
          services tailored to your business needs.
        </p>

        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full hover:brightness-110 transition"
        >
          {/* Calendar Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule Meeting
        </button>

        {/* Calendar popup */}
        {showCalendar && (
          <div className="mt-6 p-4 max-w-xs bg-gray-50 rounded-lg shadow-md">
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button
              onClick={handleConfirm}
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Confirm
            </button>
          </div>
        )}
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Contact Us
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
          className="space-y-0.1"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 font-medium text-gray-700"
            >
              Number
            </label>
            <input
              type="number"
              id="number"
              required
              placeholder="Your number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block mb-2 font-medium text-gray-700"
            >
              Services
            </label>
            <select
              id="services"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo-services">SEO Services</option>
              <option value="software-development">Software Development</option>
              <option value="graphic-design">Graphic Designing</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full hover:brightness-110 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThinkBhizComponent;
