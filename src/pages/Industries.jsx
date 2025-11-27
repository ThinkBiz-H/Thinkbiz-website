import React from "react";

const industriesData = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Innovative IT solutions to enhance patient care and operational efficiency.",
    icon: "🏥",
  },
  {
    id: 2,
    title: "Finance",
    description:
      "Secure and scalable financial software tailored to your business needs.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Modern digital tools to transform learning and educational management.",
    icon: "🎓",
  },
  {
    id: 4,
    title: "Retail",
    description:
      "Seamless e-commerce platforms and retail management solutions.",
    icon: "🛒",
  },
  {
    id: 5,
    title: "Manufacturing",
    description:
      "Streamlined production and supply chain software for manufacturers.",
    icon: "🏭",
  },
  {
    id: 6,
    title: "Real Estate",
    description:
      "Smart property management and real estate marketing solutions.",
    icon: "🏠",
  },
  {
    id: 7,
    title: "Automotive",
    description:
      "Advanced software solutions for automotive industry innovation.",
    icon: "🚗",
  },
  {
    id: 8,
    title: "Hospitality",
    description:
      "Efficient management and booking systems for hotels and restaurants.",
    icon: "🏨",
  },
  {
    id: 9,
    title: "Telecommunications",
    description:
      "Reliable communication infrastructure and network management solutions.",
    icon: "📡",
  },
  {
    id: 10,
    title: "Energy",
    description:
      "Sustainable energy solutions and smart grid management technologies.",
    icon: "⚡",
  },
  {
    id: 11,
    title: "Transportation",
    description:
      "Innovative logistics and fleet management software solutions.",
    icon: "🚚",
  },
  {
    id: 12,
    title: "Media & Entertainment",
    description: "Dynamic content management and digital streaming platforms.",
    icon: "🎬",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-orange-500">
          Industries We Serve
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tailored technology solutions for a wide range of industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industriesData.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700 
                         hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-default"
            >
              <div className="text-7xl mb-6 text-orange-500">{icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {description}
              </p>
              <button className="bg-orange-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
