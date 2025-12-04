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
    title: "Real Estate",
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
Healthcare industry me digital transformation kaafi fast grow ho rahi hai. Hospitals, clinics, labs 
aur doctors ko ab smart systems ki zarurat hoti hai jisse patient records secure rahe, appointment 
booking easy ho, and real-time reports available ho jaye. Telemedicine, online consultation, 
digital prescriptions aur AI diagnosis apps healthcare ko next level tak le jaati hain. Ek modern 
website ya app se patient experience 3x improve hota hai, waiting time kam hota hai, aur operations 
automated ho jate hain. ThinkBhiz Healthcare ke liye secure, scalable aur HIPAA-ready software 
solutions banata hai.
`,
  },

  Finance: {
    image: industriesData[1].image,
    text: `
Finance industry me security sabse bada factor hota hai. Banks, NBFCs, fintech apps aur loan 
platforms ko safe transaction system, fraud detection, encrypted databases aur real-time analytics 
ki zarurat hoti hai. Digital onboarding, KYC automation, EMI calculator, wallet, UPI integration 
financial business ko super fast aur scalable banata hai. Ek modern financial website/app trust 
aur transparency build karti hai. ThinkBhiz end-to-end secure, RBI-friendly fintech solutions 
deliver karta hai.
`,
  },

  Education: {
    image: industriesData[2].image,
    text: `
Education industry digital tools se 5x fast grow kar rahi hai. Schools, colleges aur institutes 
ko smart learning apps, online exams, attendance tracking, results automation aur LMS systems ki 
zarurat hoti hai. Ek digital platform students ke liye personalized learning, parents ke liye 
updated information aur institutes ke liye smooth administration provide karta hai. 
ThinkBhiz education brands ke liye modern edTech platforms banata hai.
`,
  },

  Retail: {
    image: industriesData[3].image,
    text: `
Retail industry me eCommerce ki demand sabse zyada badh rahi hai. Ek powerful online store, fast 
checkout system, inventory automation aur payment gateway integration retail business ko 10x scale 
kar deta hai. Digital presence se customers worldwide reach karte hain. ThinkBhiz retail ke liye 
AI-based recommendation systems, mobile apps aur high-converting websites banata hai.
`,
  },

  Manufacturing: {
    image: industriesData[4].image,
    text: `
Manufacturing industry me automation sabse bada game changer hai. Smart ERP systems, supply chain 
tracking, inventory management aur production monitoring se companies apna wastage 40% tak kam 
kar sakti hain. IoT dashboards aur real-time analytics se pure factory operations optimize hote hain. 
ThinkBhiz manufacturing brands ke liye end-to-end industrial automation software banata hai.
`,
  },

  RealEstate: {
    image: industriesData[5].image,
    text: `
Real Estate industry me digital platforms property sales aur lead generation ko 7x boost dete hain. 
3D property tours, automated CRM, rent/lease management, online bookings aur virtual site visits 
buyers ka experience super smooth banate hain. ThinkBhiz real estate ke liye modern property 
management software aur high-converting real estate websites develop karta hai.
`,
  },

  Automotive: {
    image: industriesData[6].image,
    text: `
Automotive industry me advanced software ka use har saal badh raha hai — service booking apps, 
vehicle diagnostics dashboards, fleet management systems aur EV charging station networks jaisi 
cheezein digitally manage hoti hain. AI-based maintenance prediction aur GPS tracking fleet cost 
kam karti hain. ThinkBhiz automotive companies ke liye smart connected solutions banata hai.
`,
  },

  Hospitality: {
    image: industriesData[7].image,
    text: `
Hotels, restaurants aur travel brands ko ab digital presence ki sabse zyada zarurat hoti hai. 
Online booking systems, digital menus, table reservations, review management aur guest experience 
automation se hospitality business 4x fast grow hota hai. ThinkBhiz hospitality ke liye elegant 
websites aur full booking management systems build karta hai.
`,
  },

  Telecommunications: {
    image: industriesData[8].image,
    text: `
Telecom industry me large-scale network management, real-time monitoring aur customer self-service 
portals essential hote hain. Recharge portals, billing systems, SIM activation apps aur data usage 
dashboards customers ko seamless experience dete hain. ThinkBhiz telecom companies ke liye scalable 
network solutions deliver karta hai.
`,
  },

  Energy: {
    image: industriesData[9].image,
    text: `
Energy sector me smart grids, usage tracking, IoT meters aur renewable energy monitoring systems ki 
demand barh rahi hai. AI-based consumption analytics businesses ko cost optimize karne me help karta 
hai. ThinkBhiz energy companies ke liye smart dashboards, IoT-based control systems aur monitoring 
platforms develop karta hai.
`,
  },

  Transportation: {
    image: industriesData[10].image,
    text: `
Transportation aur logistics industry poori tarah digital tools par shift ho rahi hai. Fleet 
management systems, live tracking, route optimization, delivery apps aur driver analytics se 
delivery time 60% tak kam hota hai. ThinkBhiz logistics aur transport companies ke liye powerful 
tracking aur management systems banata hai.
`,
  },

  MediaEntertainment: {
    image: industriesData[11].image,
    text: `
Media aur entertainment brands ko modern content delivery platforms, streaming websites/apps, 
digital rights management, creative portfolios aur audience analytics tools ki zarurat hoti hai. 
OTT-style platforms, video CMS aur monetization tools creators ko global reach dete hain. ThinkBhiz 
media industry ke liye fast, scalable aur high-performance platforms develop karta hai.
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
