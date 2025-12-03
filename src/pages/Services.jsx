import React from "react";
import { useParams, Link } from "react-router-dom";
import Newsletter from "../assets/Component/NewsLetterbox";

const serviceContent = {
  web: {
    title: "Web Development",
    description:
      "We build fast, responsive, and beautiful websites tailored to your needs. Using the latest technologies, we ensure your website is performant and SEO-friendly.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Fast loading speeds",
      "Cross-browser compatibility",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  app: {
    title: "App Development",
    description:
      "Creating mobile apps for iOS and Android platforms that users love, with smooth UX and robust functionality.",
    features: [
      "iOS & Android development",
      "User-centric design",
      "Performance optimization",
      "App store deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our expert digital marketing services, from social media to PPC campaigns.",
    features: [
      "Social media marketing",
      "PPC & paid ads",
      "Content marketing",
      "Analytics & reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  seo: {
    title: "SEO Services",
    description:
      "Improve your website ranking and drive organic traffic with our comprehensive SEO strategies tailored for your business.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Link building",
    ],
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
  },
  graphic: {
    title: "Graphic Designing",
    description:
      "Creative graphic designs to make your brand stand out visually.",
    features: [
      "Logo design",
      "Brand identity",
      "Marketing materials",
      "Digital graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
  },
  software: {
    title: "Software Development",
    description:
      "Custom software solutions designed for your business challenges with scalable architecture.",
    features: [
      "Custom solutions",
      "System integration",
      "Maintenance & support",
      "Agile development",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },

  // New Added Services
  email: {
    title: "Email & Affiliate Marketing",
    description:
      "Grow your business with smart email campaigns and affiliate marketing strategies that convert.",
    features: [
      "Automated email sequences",
      "Affiliate network setup",
      "Audience segmentation",
      "Performance tracking & optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  video: {
    title: "Video Editing",
    description:
      "Professional video editing for advertisements, social media reels, YouTube, and promotional videos.",
    features: [
      "High-quality editing",
      "Motion graphics and effects",
      "Shorts & reels editing",
      "Brand storytelling through video",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  brand: {
    title: "Brand Promotion",
    description:
      "Enhance your brand visibility and reputation with strategic promotional campaigns across multiple platforms.",
    features: [
      "Social media campaigns",
      "Influencer marketing",
      "Online reputation management",
      "Event promotion",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
  },
  creative: {
    title: "Creative Writing",
    description:
      "Engaging creative writing services for blogs, ads, scripts, and social media content that connect with your audience.",
    features: [
      "Blog & article writing",
      "Ad copywriting",
      "Social media content",
      "Scriptwriting & storytelling",
    ],
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80",
  },
};

const Services = () => {
  const { serviceName } = useParams();
  const service = serviceContent[serviceName];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-8">
        <h2 className="text-4xl font-extrabold mb-4 text-red-500">
          Service Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-10">
          {/* Image Section */}
          <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-700">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content Section */}
          <div className="text-white flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold mb-8 text-orange-500">
              {service.title}
            </h1>
            <p className="text-lg leading-relaxed mb-10 text-gray-300">
              {service.description}
            </p>

            <h3 className="text-3xl font-semibold mb-6 text-white">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="hover:text-orange-500 transition-colors cursor-default"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                to="/services"
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-orange-700 transition"
              >
                ← Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Services;
