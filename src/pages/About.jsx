import React from "react";
import ProjectCounter from "../assets/Component/ProjectCounter";

import { FaUsers, FaAward, FaRocket, FaHeadset } from "react-icons/fa";
import Newsletter from "../assets/Component/NewsLetterbox";

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
              ThinkBiz Hightech Pvt. Ltd. is a results-driven digital agency
              specialising in Website Development, Mobile App Development, SEO,
              and Digital Marketing services. We help businesses build a
              powerful online presence and achieve measurable growth through
              innovative strategies and high-performing digital solutions. Our
              team combines modern design, robust technology, and data-driven
              marketing to create websites, applications, and campaigns that
              convert. Whether it’s developing a seamless user-friendly website,
              crafting a custom mobile app, boosting online visibility through
              SEO, or executing ROI-focused digital marketing—ThinkBiz is
              committed to delivering excellence at every step.
            </p>

            {/* <button className="mt-6 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Learn More
            </button> */}
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
            ThinkBiz Hightech Pvt. Ltd. was established with the vision of
            empowering businesses through modern digital solutions. Over the
            years, we have grown into a trusted provider of Website Development,
            Mobile App Development, SEO, and Digital Marketing services. Our
            focus on innovation, quality, and measurable results has enabled us
            to support brands in building a strong and effective digital
            presence. Today, we continue to advance with the same commitment—to
            deliver reliable, scalable, and impactful digital solutions for
            every client.
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
              Why "ThinkBiz HighTech"? Because we believe that the future of
              business lies in the seamless integration of technology and
              creativity. Behind our name is a vision driven by strategy and
              innovation. At ThinkBiz HighTech, we specialize in crafting
              exceptional digital experiences. From intuitive and responsive
              websites to engaging Android and iOS mobile applications, we are
              here to elevate your brand in the digital space. Our services also
              include designing creative logos and compelling product portfolios
              that truly represent your business. We excel in digital and social
              media marketing, ensuring your brand shines brightly across
              platforms. With targeted brand promotions through SMS and email
              marketing, we help you connect with your audience in meaningful
              ways. Our diverse clientele spans multiple industries, and we take
              pride in helping businesses establish a powerful online presence.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#ff7515] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              At ThinkBiz HighTech Pvt Ltd, we aspire to be the driving force
              behind your digital transformation, delivering cost-effective yet
              technologically advanced products and services. Our goal is to
              become the premier mobile application development company in Delhi
              NCR. In an ever-evolving digital landscape, staying ahead of the
              curve can be challenging. That’s where we come in. We are
              dedicated to making you future-ready, enabling you to grow bigger
              and better, and equipping you with cutting-edge technology to
              excel in your domain. Our name embodies our mission: Think-Biz
              High-Tech. Whether you have a groundbreaking business idea or a
              unique vision, we promise to elevate it to high-tech solutions
              that propel your success. We’re committed to keeping our promises
              and ensuring that you thrive in the digital age. Together, let’s
              transform your aspirations into reality!
            </p>
          </div>
        </div>
      </section>
      {/* ================= OUR TEAM (ULTRA MODERN) ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#fff7f0] via-white to-[#f7f1ff]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-extrabold text-[#FF7515] drop-shadow-lg">
            Our Team
          </h2>
          <p className="text-gray-600 mt-4 text-xl">
            Creative. Passionate. Driven.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-[#ff7515] to-[#b14bff] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* TEAM GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {[
            {
              name: "BHARAT CHAUDHARY",
              role: "Director",
              img: "https://www.thinkbizhightech.com/testimonials/WhatsApp%20Image%202024-12-13%20at%2012.26.17.jpeg",
            },
            {
              name: "MILAN CHHALERIYA",
              role: "Director",
              img: "https://www.thinkbizhightech.com/testimonials/7457962b-cde2-4c7c-974c-3a9c1a054a66.jpeg",
            },
            {
              name: "TARUN CHHALERIYA",
              role: "General Manager",
              img: "https://www.thinkbizhightech.com/testimonials/e6f9276c-5210-4545-ae65-4cbd426bb775.jpeg",
            },
            {
              name: "Nibha Thakur",
              role: "Chief Technology Officer",
              img: "/mam-image.jpeg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white/30 backdrop-blur-xl p-6 
        shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-white/20"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff751540] via-[#b14bff30] to-[#ff751520] opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700"></div>

              <img
                src={member.img}
                className="w-full h-56 object-cover rounded-2xl group-hover:scale-110 transition-all duration-500"
              />

              <div className="relative z-10 mt-5 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff7515] transition">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1 group-hover:text-[#b14bff] transition">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GROUP PHOTO */}
        <div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl relative 
  bg-white/30 backdrop-blur-xl p-6 border border-white/20 
  hover:shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3"
        >
          <img
            src="/Group-image.jpeg"
            className="w-full h-[420px] object-cover rounded-2xl hover:scale-105 transition-all duration-700"
          />

          <div className="text-center mt-6">
            <h3 className="text-3xl font-bold  text-[#FF7515] ">
              Our Amazing Team
            </h3>
            <p className="text-gray-600">Together we build excellence.</p>
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
      <section className="py-24 px-6 bg-black text-white text-center">
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

      <Newsletter />
    </div>
  );
};

export default About;
