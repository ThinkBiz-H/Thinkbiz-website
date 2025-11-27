import React from "react";
import ProjectCounter from "../assets/Component/ProjectCounter";

import { FaUsers, FaAward, FaRocket, FaHeadset } from "react-icons/fa";

const About = () => {
  const aboutStats = [
    { value: 150, title: "Projects Completed" },
    { value: 50, title: "Active Clients" },
    { value: 5, title: "Years Experience" },
    { value: 10, title: "Countries Served" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="py-24 px-6 bg-[#ff7515] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
          {/* Left */}
          <div className="flex-1">
            <p className="uppercase tracking-wide text-lg mb-3 font-semibold">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Building Digital Experiences
              <br /> That Drive Growth
            </h1>
            <p className="text-lg opacity-90 max-w-lg leading-relaxed">
              ThinkBhiz Hightech is a next–generation IT company offering
              innovative software solutions, digital marketing, and branding to
              help businesses scale globally.
            </p>

            <button className="mt-6 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>

          {/* Right */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#ff7515] mb-6">Our Story</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            Since our beginning, ThinkBhiz Hightech has been committed to
            transforming businesses through technology. What started as a small
            team is now a trusted global IT partner delivering powerful
            solutions across multiple industries.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#ff7515] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Deliver world–class solutions that empower businesses to innovate,
              grow, and stay ahead in a competitive digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#ff7515] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be recognized as a global leader in digital transformation,
              software development, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center font-bold text-[#ff7515] mb-12">
            Why Choose ThinkBhiz?
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="p-8 text-center bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaUsers className="text-[#ff7515] text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Expert Team</h4>
              <p className="text-gray-600">Professional, certified experts.</p>
            </div>

            <div className="p-8 text-center bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaAward className="text-[#ff7515] text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Quality Work</h4>
              <p className="text-gray-600">Top–notch development standards.</p>
            </div>

            <div className="p-8 text-center bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaRocket className="text-[#ff7515] text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Speed with perfection.</p>
            </div>

            <div className="p-8 text-center bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <FaHeadset className="text-[#ff7515] text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-600">We’re always here for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gray-50 px-6">
        <ProjectCounter counters={aboutStats} />
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-[#ff7515] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Something Extraordinary
        </h2>
        <p className="opacity-95 text-lg mb-8">
          Partner with ThinkBhiz Hightech and grow your business digitally.
        </p>

        <button className="bg-white text-black font-semibold px-10 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
