import React, { useState } from "react";
import Newsletter from "../assets/Component/NewsLetterbox";

// ======================= INDUSTRIES DATA WITH ONLINE IMAGES =======================
const industriesData = [
  {
    id: 1,
    title: "Healthcare",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    id: 2,
    title: "Finance",
    icon: "💰",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
  {
    id: 3,
    title: "Education",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: 4,
    title: "Retail",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 5,
    title: "Manufacturing",
    icon: "🏭",
    image: "https://images.unsplash.com/photo-1581092917952-1c71c0b1e1df",
  },
  {
    id: 6,
    title: "RealEstate",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 7,
    title: "Automotive",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    id: 8,
    title: "Hospitality",
    icon: "🏨",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f5",
  },
  {
    id: 9,
    title: "Telecommunications",
    icon: "📡",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 10,
    title: "Energy",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
  },
  {
    id: 11,
    title: "Transportation",
    icon: "🚚",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    id: 12,
    title: "MediaEntertainment",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
];

// ======================= DETAILS WITH IMAGE + TEXT OBJECT FORMAT =======================
const industriesDetails = {
  Healthcare: {
    image: industriesData[0].image,
    text: `
ThinkBiz Hightech Pvt. Ltd. provides advanced digital solutions tailored for the healthcare sector, supporting hospitals, clinics, and medical service providers in enhancing patient care and operational efficiency. Our services include secure patient management systems, telemedicine platforms, healthcare mobile apps, and data-driven dashboards that ensure compliance, accuracy, and seamless communication. We focus on improving patient engagement, optimising workflow automation, and enabling healthcare organisations to deliver reliable, modern, and technology-enabled services.

`,
  },

  Finance: {
    image: industriesData[1].image,
    text: `
We support financial institutions with secure, scalable, and high-performance digital solutions that comply with industry regulations and ensure data integrity. Our offerings include fintech platforms, mobile banking applications, automated processes, secure data systems, and digital marketing strategies designed to enhance customer trust and engagement. ThinkBiz helps financial organisations streamline operations, strengthen security, and deliver innovative digital services that meet the evolving expectations of modern consumers.
`,
  },

  Education: {
    image: industriesData[2].image,
    text: `
ThinkBiz partners with educational institutions to build advanced digital ecosystems that promote effective learning and efficient institutional management. Our solutions include e-learning platforms, student management systems, mobile education apps, and digital content delivery tools. We focus on improving accessibility, enhancing student-teacher interaction, and enabling institutions to manage academic and administrative processes with greater precision and reliability.
`,
  },

  Retail: {
    image: industriesData[3].image,
    text: `
For the retail industry, ThinkBiz develops customer-focused digital solutions that drive engagement, increase conversions, and support omni-channel sales. Our expertise includes e-commerce platforms, mobile shopping applications, inventory management systems, and targeted digital marketing strategies. We help retailers enhance customer experience, optimise operations, and leverage analytics to gain insights into consumer behaviour and market trends.
`,
  },

  Manufacturing: {
    image: industriesData[4].image,
    text: `
We deliver technology-driven solutions that help manufacturing companies automate processes, improve production efficiency, and manage supply chains more effectively. Our services include workflow automation systems, production monitoring dashboards, inventory control solutions, and custom software tailored to industry needs. ThinkBiz enables manufacturers to operate with higher precision, greater scalability, and improved cost-efficiency through robust digital transformation.
`,
  },

  RealEstate: {
    image: industriesData[5].image,
    text: `
ThinkBiz supports the real estate industry with digital solutions that simplify property showcasing, customer communication, and lead management. Our websites, mobile apps, and CRM tools enable real estate firms to present properties professionally, capture leads efficiently, and enhance buyer engagement. We focus on creating seamless digital experiences that build trust, improve visibility, and drive property sales through smart automation and modern design.
`,
  },

  Automotive: {
    image: industriesData[6].image,
    text: `
For automotive businesses, ThinkBiz develops digital platforms that enhance customer interaction, streamline dealership operations, and support brand promotion. Our solutions include vehicle listing websites, service scheduling portals, mobile apps, and targeted marketing campaigns. We help automotive companies strengthen customer relationships, showcase products effectively, and optimise workflow through advanced digital technologies.
`,
  },

  Hospitality: {
    image: industriesData[7].image,
    text: `
ThinkBiz provides hospitals with reliable digital systems designed to improve patient management, staff coordination, and administrative efficiency. Our solutions include hospital management systems, appointment scheduling platforms, patient communication tools, and analytics dashboards. We focus on enhancing service quality, reducing operational delays, and enabling hospitals to adopt modern, technology-backed healthcare processes.
`,
  },

  Telecommunications: {
    image: industriesData[8].image,
    text: `
We support telecom companies with scalable digital solutions that improve network management, customer onboarding, billing operations, and service delivery. Our expertise includes customer portals, self-service apps, automated workflows, and marketing solutions designed to enhance customer satisfaction. ThinkBiz helps telecom providers deliver faster, more reliable, and customer-centric digital experiences.
`,
  },

  Energy: {
    image: industriesData[9].image,
    text: `
ThinkBiz delivers secure and efficient digital solutions for the energy sector, supporting operations such as resource management, monitoring systems, and customer engagement. Our platforms enable real-time insights, enhanced efficiency, and improved decision-making. We help energy companies digitise their processes, reduce operational costs, and adopt smart technologies for sustainable growth.
`,
  },

  Transportation: {
    image: industriesData[10].image,
    text: `
We create advanced digital platforms that enhance logistics, fleet management, route optimisation, and customer connectivity for transportation businesses. Our solutions include tracking systems, transport management software, mobile apps, and analytics tools. ThinkBiz empowers transportation companies to operate more efficiently, increase transparency, and provide seamless service experiences.
`,
  },

  MediaEntertainment: {
    image: industriesData[11].image,
    text: `
ThinkBiz develops dynamic digital solutions for the media and entertainment industry, helping organisations enhance content distribution, user engagement, and brand visibility. Our services include streaming platforms, interactive websites, mobile apps, and marketing campaigns tailored for digital audiences. We enable creators and media companies to deliver high-quality, engaging content through modern, technology-driven channels.
`,
  },
};

const Industries = () => {
  const [selected, setSelected] = useState(null);
  const selectedIndustry = industriesData.find((i) => i.title === selected);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-orange-500">
          Industries We Serve
        </h1>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tailored technology solutions for a wide range of industries.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industriesData.map(({ id, title, icon }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <div className="text-7xl mb-6 text-orange-500">{icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>

              <button
                onClick={() => setSelected(title)}
                className="bg-orange-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && selectedIndustry && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 w-full max-w-lg md:max-w-4xl h-auto p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl relative animate-fadeIn overflow-y-auto max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="fixed md:absolute top-3 right-3 text-gray-300 hover:text-white text-3xl z-50"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">
              {selected}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* LEFT IMAGE */}
              <div className="w-full md:w-1/2">
                <img
                  src={industriesDetails[selected]?.image}
                  alt=""
                  className="rounded-xl shadow-lg w-full"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {industriesDetails[selected]?.text}
                </p>

                <button className="mt-6 bg-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Newsletter />
    </div>
  );
};

export default Industries;
