import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-[#ff7515] rounded-4xl shadow-lg text-center my-10">
      <h2 className="text-4xl font-extrabold mb-2 text-white">
        Subscribe now!
      </h2>
      <p className="text-white/80 text-lg mb-8">Get the latest update.</p>

      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full py-4 px-6 pr-40 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700 text-lg"
        />

        <button
          type="submit"
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
