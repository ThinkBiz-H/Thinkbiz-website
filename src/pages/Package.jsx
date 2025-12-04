import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Newsletter from "../assets/Component/NewsLetterbox";

const packagesData = {
  "Web Development": {
    monthly: [
      {
        id: 1,
        name: "Basic",
        price: 4999,
        displayPrice: "₹4999",
        features: [
          "Website up to 5 pages",
          "Basic SEO",
          "Responsive Design",
          "1 Month Support",
        ],
      },
      {
        id: 2,
        name: "Standard",
        price: 9999,
        displayPrice: "₹9999",
        features: [
          "Website up to 15 pages",
          "Advanced SEO",
          "Custom Design",
          "3 Months Support",
          "Basic Digital Marketing",
        ],
      },
    ],
    yearly: [
      {
        id: 3,
        name: "Premium",
        price: 19999,
        displayPrice: "₹19999",
        features: [
          "Unlimited Pages",
          "Full SEO & Marketing",
          "E-commerce Integration",
          "6 Months Support",
          "Priority Support",
        ],
      },
    ],
  },
  SEO: {
    monthly: [
      {
        id: 4,
        name: "SEO Starter",
        price: 2999,
        displayPrice: "₹2999",
        features: [
          "Basic SEO Audit",
          "Keyword Research",
          "On-Page Optimization",
        ],
      },
    ],
    yearly: [
      {
        id: 5,
        name: "SEO Pro",
        price: 29999,
        displayPrice: "₹29999",
        features: [
          "Full SEO Audit",
          "Keyword Research & Strategy",
          "On-Page & Off-Page SEO",
          "Monthly Reports",
        ],
      },
    ],
  },
  "Digital Marketing": {
    monthly: [
      {
        id: 6,
        name: "Starter",
        price: 3999,
        displayPrice: "₹3999",
        features: [
          "Social Media Management",
          "Content Creation",
          "Basic Ad Campaigns",
        ],
      },
    ],
    yearly: [
      {
        id: 7,
        name: "Advanced",
        price: 39999,
        displayPrice: "₹39999",
        features: [
          "Full Campaign Management",
          "Multi-Channel Ads",
          "Monthly Analytics",
        ],
      },
    ],
  },
  "Mobile App Development": {
    monthly: [
      {
        id: 8,
        name: "Starter",
        price: 3999,
        displayPrice: "₹3999",
        features: [
          "Social Media Management",
          "Content Creation",
          "Basic Ad Campaigns",
        ],
      },
    ],
    yearly: [
      {
        id: 9,
        name: "Advanced",
        price: 39999,
        displayPrice: "₹39999",
        features: [
          "Full Campaign Management",
          "Multi-Channel Ads",
          "Monthly Analytics",
        ],
      },
    ],
  },
};

const Package = () => {
  // Initialize billing state for each service as "monthly"
  const [billing, setBilling] = useState(
    Object.keys(packagesData).reduce((acc, service) => {
      acc[service] = "monthly";
      return acc;
    }, {})
  );

  const handleToggle = (serviceName, type) => {
    setBilling((prev) => ({
      ...prev,
      [serviceName]: type,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-12 text-orange-500">
          Our Packages
        </h1>

        {Object.entries(packagesData).map(([serviceName, packageGroup]) => (
          <section key={serviceName} className="mb-20">
            <h2 className="text-4xl font-bold mb-6 text-orange-400">
              {serviceName}
            </h2>

            <div className="flex justify-center mb-8">
              <button
                onClick={() => handleToggle(serviceName, "monthly")}
                className={`px-6 py-2 rounded-l-full font-semibold transition ${
                  billing[serviceName] === "monthly"
                    ? "bg-orange-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleToggle(serviceName, "yearly")}
                className={`px-6 py-2 rounded-r-full font-semibold transition ${
                  billing[serviceName] === "yearly"
                    ? "bg-orange-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Yearly
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {packageGroup[billing[serviceName]].map(
                ({ id, name, displayPrice, features }) => (
                  <div
                    key={id}
                    className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700
                    hover:shadow-2xl hover:scale-105 transform transition duration-500 cursor-pointer flex flex-col justify-between"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-orange-400">
                      {name}
                    </h3>
                    <p className="text-4xl font-extrabold mb-6">
                      {displayPrice}
                    </p>

                    <ul className="text-gray-300 mb-6 space-y-3 text-left flex-grow">
                      {features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 before:content-none"
                        >
                          <FaCheck className="text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() =>
                        alert(
                          `Selected package: ${name}, Price: ${displayPrice}`
                        )
                      }
                      className="w-full bg-orange-500 text-gray-900 font-semibold py-3 rounded-full hover:bg-orange-600 transition"
                    >
                      Get Started
                    </button>
                  </div>
                )
              )}
            </div>
          </section>
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default Package;
