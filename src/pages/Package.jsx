import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Newsletter from "../assets/Component/NewsLetterbox";
const packagesData = {
  "Web Development": {
    monthly: [
      {
        id: 1,
        name: "Essential",
        price: 80,
        displayPrice: "$80/month",
        features: [
          "Dynamic Website",
          "New Website Design",
          "Update 10 Pages",
          "New Domain (Optional)",
          "New Logo Design",
          "AI Chat Feature",
          "Web Hosting",
          "Search Engine (SEO) Friendly",
          "Website Pages Content",
          "SEO Keywords Research",
          "Competitors Analysis Report",
          "Explainer Video",
          "Customized Contact Forms (Leads)",
          "Stock Images",
          "Premium Security (SSL)",
          "Advanced Site Security",
          "Hosted Domain Emails – 5",
          "Daily Backups",
          "Unlimited Bandwidth",
          "Unlimited Databases",
          "Dedicated Resources",
          "Dedicated IP Address",
          "99.9% Uptime Guaranteed",
          "User-Friendly Admin Panel",
          "Web Maintenance 50hrs/yearly",
          "Responsive Site",
          "Business Profiles Creations 5",
          "Social Media Profile Creations",
          "Social Media Profile Linking",
          "Google Analytics Tracking",
          "Google Search Console Tracking",
          "Google eCommerce Tracking",
          "Payment Gateway Integration",
          "Email/Chat Support",
          "Dedicated Account Manager",
          "Quarterly Website Progress Report",
        ],
      },
      {
        id: 2,
        name: "Advance",
        price: 150,
        displayPrice: "$150/month",
        features: [
          "Ultra Dynamic Website",
          "New Website Design",
          "Upto 15 Pages",
          "New Domain (Optional)",
          "New Logo Design",
          "AI Chat Feature",
          "Web Hosting",
          "Search Engine (SEO) Friendly",
          "Website Pages Content",
          "SEO Keywords Research",
          "Competitors Analysis Report",
          "Explainer Video",
          "Customized Contact Forms (Leads)",
          "Stock Images",
          "Premium Security (SSL)",
          "Advanced Site Security",
          "Hosted Domain Emails – 20",
          "Daily Backups",
          "Unlimited Bandwidth",
          "Unlimited Databases",
          "Dedicated Resources",
          "Dedicated IP Address",
          "99.9% Uptime Guaranteed",
          "User-Friendly Admin Panel",
          "Web Maintenance 75hrs/yearly",
          "Responsive Site",
          "Business Profiles Creations 10",
          "Social Media Profile Creations",
          "Social Media Profile Linking",
          "Google Analytics Tracking",
          "Google Search Console Tracking",
          "Google eCommerce Tracking",
          "Payment Gateway Integration",
          "Email/Chat Support",
          "Dedicated Account Manager",
          "Quarterly Website Progress Report",
        ],
      },
      {
        id: 3,
        name: "Professional",
        price: 200,
        displayPrice: "$200/month",
        features: [
          "Custom Website",
          "New Website Design",
          "Upto 20 Pages",
          "New Domain (Optional)",
          "New Logo Design",
          "AI Chat Feature",
          "Web Hosting",
          "Search Engine (SEO) Friendly",
          "Website Pages Content",
          "SEO Keywords Research",
          "Competitors Analysis Report",
          "Explainer Video – 1 Minute",
          "Customized Contact Forms (Leads)",
          "Stock Images",
          "Premium Security (SSL)",
          "Advanced Site Security",
          "Hosted Domain Emails – 50",
          "Daily Backups",
          "Unlimited Bandwidth",
          "Unlimited Databases",
          "Dedicated Resources",
          "Dedicated IP Address",
          "99.9% Uptime Guaranteed",
          "User-Friendly Admin Panel",
          "Web Maintenance 100hrs/yearly",
          "Responsive Site",
          "Business Profiles Creations 15",
          "Social Media Profile Creations",
          "Social Media Profile Linking",
          "Google Analytics Tracking",
          "Google Search Console Tracking",
          "Google eCommerce Tracking",
          "Payment Gateway Integration",
          "Email/Chat Support",
          "Dedicated Account Manager",
          "Quarterly Website Progress Report",
        ],
      },
      {
        id: 4,
        name: "Enterprise",
        price: 250,
        displayPrice: "$250/month",
        features: [
          "Custom Website",
          "New Website Design",
          "Upto 25 Pages",
          "New Domain (Optional)",
          "New Logo Design",
          "AI Chat Feature",
          "Web Hosting",
          "Search Engine (SEO) Friendly",
          "Website Pages Content",
          "SEO Keywords Research",
          "Competitors Analysis Report",
          "Explainer Video – 2 Minute",
          "Customized Contact Forms (Leads)",
          "Stock Images",
          "Premium Security (SSL)",
          "Advanced Site Security",
          "Hosted Domain Emails – 50",
          "Daily Backups",
          "Unlimited Bandwidth",
          "Unlimited Databases",
          "Dedicated Resources",
          "Dedicated IP Address",
          "99.9% Uptime Guaranteed",
          "User-Friendly Admin Panel",
          "Web Maintenance 200hrs/yearly",
          "Responsive Site",
          "Business Profiles Creations 30",
          "Social Media Profile Creations",
          "Social Media Profile Linking",
          "Google Analytics Tracking",
          "Google Search Console Tracking",
          "Google eCommerce Tracking",
          "Payment Gateway Integration",
          "Email/Chat Support",
          "Dedicated Account Manager",
          "Quarterly Website Progress Report",
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
        id: 5,
        name: "Basic",
        price: 500,
        displayPrice: "$500",
        features: [
          "30 Keywords",
          "6 Landing Pages",
          "50 Backlinks",
          "GBP (GMB)",
          "Social Media",
          "Video Marketing",
          "Marketing Automation",
          "OnPage SEO",
          "OffPage SEO",
          "Technical SEO",
          "Content Marketing",
        ],
      },
      {
        id: 6,
        name: "Standard",
        price: 800,
        displayPrice: "$800",
        features: [
          "50 Keywords",
          "10 Landing Pages",
          "90 Backlinks",
          "GBP (GMB)",
          "Social Media",
          "Video Marketing",
          "Marketing Automation",
          "OnPage SEO",
          "OffPage SEO",
          "Technical SEO",
          "Content Marketing",
        ],
      },
      {
        id: 7,
        name: "Advance",
        price: 1000,
        displayPrice: "$1000",
        features: [
          "75 Keywords",
          "15 Landing Pages",
          "150 Backlinks",
          "GBP (GMB)",
          "Social Media",
          "Video Marketing",
          "Marketing Automation",
          "OnPage SEO",
          "OffPage SEO",
          "Technical SEO",
          "Content Marketing",
        ],
      },
      {
        id: 8,
        name: "Enterprise",
        price: 1200,
        displayPrice: "$1200",
        features: [
          "100 Keywords",
          "20 Landing Pages",
          "250 Backlinks",
          "GBP (GMB)",
          "Social Media",
          "Video Marketing",
          "Marketing Automation",
          "OnPage SEO",
          "OffPage SEO",
          "Technical SEO",
          "Content Marketing",
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
        id: 9,
        name: "Bronze Package",
        price: 299,
        displayPrice: "$299/month",
        features: [
          "2 social media platforms",
          "12 posts per month",
          "Professional graphics + captions",
          "Hashtag optimization",
          "Monthly analytics report",
          "Basic ad setup",
          "Basic SEO keyword suggestions",
        ],
      },
      {
        id: 10,
        name: "Silver Package",
        price: 399,
        displayPrice: "$399/month",
        features: [
          "2–3 social platforms",
          "16 posts per month",
          "1–2 reels/short videos",
          "Competitor research",
          "Content calendar",
          "Basic SEO (on-page fixes for up to 5 pages)",
          "Ad account setup + tracking pixel",
        ],
      },
      {
        id: 11,
        name: "Gold Package",
        price: 499,
        displayPrice: "$499/month",
        features: [
          "3 platforms",
          "20 posts monthly",
          "2–3 reels/videos",
          "Advanced creative designs",
          "SEO keyword research + content strategy",
          "Blog creation (1 per month)",
          "Monthly growth strategy call (30 min)",
          "Google Analytics + Search Console setup",
        ],
      },
      {
        id: 12,
        name: "Platinum Package",
        price: 699,
        displayPrice: "$699/month",
        features: [
          "3–4 social platforms",
          "25–28 posts per month",
          "4 reels/videos",
          "Full SEO audit + optimization",
          "Paid ads management (Google OR Meta)",
          "Email marketing (2 campaigns)",
          "Competitor & audience insights",
          "Monthly KPI report",
        ],
      },
      // {
      //   id: 13,
      //   name: "Diamond Package",
      //   price: 999,
      //   displayPrice: "$999/month",
      //   features: [
      //     "All major social platforms",
      //     "30+ posts per month",
      //     "6 high-quality reels/videos",
      //     "Complete SEO (on-page + off-page)",
      //     "Google Ads + Meta Ads management",
      //     "Advanced conversion optimization",
      //     "Blog writing (2 per month)",
      //     "Influencer outreach",
      //     "Weekly performance call",
      //     "Full analytics dashboard",
      //   ],
      // },
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
        id: 14,
        name: "Basic",
        price: 800,
        displayPrice: "$800 / month",
        features: [
          "20–30 development hours/month",
          "Basic UI/UX updates",
          "Bug fixing & minor improvements",
          "Monthly performance check",
          "Backend monitoring",
          "Email support",
        ],
      },
      {
        id: 15,
        name: "Standard",
        price: 1000, // midpoint of 800–1200 as example
        displayPrice: "$800 – $1,200 / month",
        features: [
          "40–60 development hours/month",
          "UI/UX improvements",
          "New screens & small features",
          "API support & integration",
          "Cloud database updates (Firebase)",
          "Testing & QA",
          "Email + chat support",
          "App store updates",
        ],
      },
      {
        id: 16,
        name: "Advanced",
        price: 1400, // midpoint of 1200–1600
        displayPrice: "$1,200 – $1,600 / month",
        features: [
          "80–100 development hours/month",
          "New modules + advanced features",
          "Payment gateway support",
          "Real-time features (chat, maps, tracking)",
          "Security & database optimization",
          "Weekly reporting",
          "Priority support",
        ],
      },
      {
        id: 17,
        name: "Enterprise",
        price: 1800, // midpoint of 1600–2000
        displayPrice: "$1,600 – $2,000 / month",
        features: [
          "120–160 development hours/month",
          "Dedicated developer/team",
          "Complex feature development",
          "Cloud management (AWS/Firebase)",
          "ERP/CRM/AI integrations",
          "System scaling & architecture",
          "24/7 priority support",
          "Weekly sprint calls",
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

function loadRazorpayScript() {
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
}

// Set your current USD to INR exchange rate here
const USD_TO_INR_RATE = 83.5; // Example fixed rate, replace with dynamic if needed

const Package = () => {
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

  const convertUsdToInrPaise = (usdPrice) => {
    return Math.round(usdPrice * USD_TO_INR_RATE * 100); // multiply by 100 for paise
  };

  const handlePayment = async (packageName, priceUSD) => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert(
        "Razorpay SDK failed to load. Please check your internet connection."
      );
      return;
    }

    // Convert USD price to INR paise
    const amountInPaise = convertUsdToInrPaise(priceUSD);

    const options = {
      key: "rzp_test_lQ0iNCGCnEu0x3", // Your Razorpay key here
      amount: amountInPaise, // INR paise
      currency: "INR",
      name: "ThinkBiz High Tech",
      description: `Payment for ${packageName}`,
      image: "", // Your logo URL
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // You can verify payment here or redirect user
      },
      prefill: {
        email: "",
        contact: "",
      },
      theme: {
        color: "#ff7515",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
                ({ id, name, displayPrice, features, price }) => (
                  <div
                    key={id}
                    className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 transform transition duration-500 cursor-pointer flex flex-col justify-between"
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
                      onClick={() => handlePayment(name, price)}
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
