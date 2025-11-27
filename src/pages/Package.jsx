import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const packages = {
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
  yearly: [
    {
      id: 1,
      name: "Basic",
      price: 49999,
      displayPrice: "₹49999",
      features: [
        "Website up to 5 pages",
        "Basic SEO",
        "Responsive Design",
        "1 Year Support",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 99999,
      displayPrice: "₹99999",
      features: [
        "Website up to 15 pages",
        "Advanced SEO",
        "Custom Design",
        "3 Years Support",
        "Basic Digital Marketing",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 199999,
      displayPrice: "₹199999",
      features: [
        "Unlimited Pages",
        "Full SEO & Marketing",
        "E-commerce Integration",
        "6 Years Support",
        "Priority Support",
      ],
    },
  ],
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Package = () => {
  const [billing, setBilling] = useState("monthly");

  const handleToggle = (type) => {
    setBilling(type);
  };

  const handlePayment = async (packageItem) => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Razorpay options
    const options = {
      key: "rzp_test_lQ0iNCGCnEu0x3", // Replace with your Razorpay key ID
      amount: packageItem.price * 100, // amount in paise
      currency: "INR",
      name: "ThinkBhiz High Tech Pvt. Ltd",
      description: `${packageItem.name} Package Payment`,
      image: "https://your-logo-url.com/logo.png", // Replace with your logo URL or remove this line
      handler(response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // You can send this payment ID to your server for verification and further processing
      },
      prefill: {
        name: "", // You can prefill user info if you want
        email: "",
        contact: "",
      },
      theme: {
        color: "#F97316", // Orange color (same as your brand)
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-500">
          Our Packages
        </h1>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          Choose a package that fits your business needs and budget.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => handleToggle("monthly")}
            className={`px-6 py-2 rounded-l-full font-semibold transition ${
              billing === "monthly"
                ? "bg-orange-500 text-gray-900"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleToggle("yearly")}
            className={`px-6 py-2 rounded-r-full font-semibold transition ${
              billing === "yearly"
                ? "bg-orange-500 text-gray-900"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {packages[billing].map(
            ({ id, name, price, displayPrice, features }) => (
              <div
                key={id}
                className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700
                         hover:shadow-2xl hover:scale-105 transform transition duration-500 cursor-pointer
                         flex flex-col justify-between"
                style={{ animation: "fadeInUp 0.6s ease forwards", opacity: 0 }}
                onAnimationEnd={(e) => (e.currentTarget.style.opacity = 1)}
              >
                <h2 className="text-3xl font-bold mb-4 text-orange-400">
                  {name}
                </h2>
                <p className="text-4xl font-extrabold mb-6">{displayPrice}</p>

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
                  onClick={() => handlePayment({ id, name, price })}
                  className="w-full bg-orange-500 text-gray-900 font-semibold py-3 rounded-full hover:bg-orange-600 transition"
                >
                  Get Started
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Package;
