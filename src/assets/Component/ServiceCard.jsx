import React from "react";
import {
  Code2,
  MonitorSmartphone,
  BarChart3,
  PenTool,
  Database,
  Share2,
  ShoppingCart,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code2 size={32} />,
    color: "bg-white hover:bg-red-300",
    text: "We build modern, responsive, and fast websites tailored to your business needs, ensuring strong performance, clean UI, and results-focused development work.",
  },
  {
    title: "App Development",
    icon: <MonitorSmartphone size={32} />,
    color: "b hover:bg-blue-300",
    text: "We develop scalable, high-quality mobile apps designed for both Android and iOS platforms, ensuring performance, smooth UI, and reliable backend support.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone size={32} />,
    color: "bg-green-200 hover:bg-green-300",
    text: "Our digital marketing services help you grow your business online through social campaigns, targeted ads, creative content, and strong brand visibility.",
  },
  {
    title: "SEO Optimization",
    icon: <BarChart3 size={32} />,
    color: "bg-yellow-200 hover:bg-yellow-300",
    text: "We improve your website's search engine ranking through keyword research, SEO-friendly content, link optimization, and continuous performance monitoring.",
  },
  {
    title: "Graphic Designing",
    icon: <PenTool size={32} />,
    color: "bg-purple-200 hover:bg-purple-300",
    text: "We create stunning visual designs including branding, logos, banners, ads, and creatives that enhance your brand identity and audience engagement.",
  },
  {
    title: "Database Management",
    icon: <Database size={32} />,
    color: "bg- hover:bg-orange-300",
    text: "We provide reliable database management solutions ensuring accuracy, security, structured data, fast accessibility, and reliable backup solutions for businesses.",
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart size={32} />,
    color: "b hover:bg-pink-300",
    text: "We develop complete e-commerce platforms including product management, cart features, secure payments, admin dashboards, and strong performance.",
  },
  {
    title: "Social Media Branding",
    icon: <Share2 size={32} />,
    color: "b hover:bg-teal-300",
    text: "We build strong social media presence through creative posts, branding, planning, campaign execution, and audience growth analysis for long-term results.",
  },
];

const ServiceCard = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-6 font-sans bg-black">
        <h2 className="text-6xl font-bold text-center mb-12 text-[#ff7515]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:-translate-y-2 bg-white`}
            >
              <div className="mb-4 text-gray-900">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3  text-[#ff7515]">
                {service.title}
              </h3>
              <p className="text-black text-sm font-semibold leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
