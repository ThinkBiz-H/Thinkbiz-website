import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Digital Marketing & SEO",
    text: "We help your business grow online with data-driven digital marketing strategies. Through targeted campaigns, brand positioning, result-oriented strategies, and consistent performance tracking, we ensure your brand reaches the right audience. Our marketing team focuses on ROI, customer acquisition, brand awareness, and long-term business growth.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Development & Android App Development",
    text: "We create high-performance, modern, and fully responsive websites that represent your brand professionally. Our web development services include front-end and back-end solutions tailored to your unique business needs. We ensure strong UI/UX, fast loading speed, and mobile-friendly layouts so your customers always get the best online experience.",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Automation & WhatsApp Agent",
    text: "We provide AI automation solutions including chat-based WhatsApp agents that respond instantly, handle customer queries, qualify leads, and improve productivity. These AI-driven systems reduce manual workload, improve service speed, and ensure customers get responses 24/7, resulting in stronger customer engagement and higher conversion rates.",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*MtZ0n0nFFWmebZTncI2sqA.jpeg?auto=format&fit=crop&w=800&q=80",
  },
  // {
  //   title: "iOS App Development",
  //   text: "Our expert iOS development team builds seamless, secure, and scalable mobile applications optimized for Apple devices. We focus on performance, UI/UX design, and user satisfaction. From planning to deployment on the App Store, we handle the entire development cycle and ensure your app delivers smooth functionality and top-notch usability.",
  //   img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   title: "Android App Development",
  //   text: "Our Android development services bring your business to millions of Android users worldwide. We deliver modern mobile apps with advanced features, smooth navigation, and solid performance. Whether it's eCommerce, services, or enterprise solutions, we ensure your app runs fast, looks modern, and provides user-friendly functionality.",
  //   img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   title: "SEO (Search Engine Optimization)",
  //   text: "Our SEO services improve your search engine rankings and increase website traffic organically. We conduct keyword research, technical optimization, content planning, backlink building, and performance monitoring. With long-term growth in mind, our SEO methods help your business rank higher, gain visibility, and convert more customers.",
  //   img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   title: "Social Media Marketing",
  //   text: "We manage and grow your social media presence with creative content, targeted campaigns, influencer collaboration, and strong brand messaging. Our team focuses on audience engagement, brand personality, and consistent storytelling that helps you build a strong online identity and achieve measurable business growth.",
  //   img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   title: "Email Marketing",
  //   text: "Email marketing remains one of the most powerful channels for customer retention and conversion. We design highly engaging newsletters, drip campaigns, promotional emails, and automated workflows. Every campaign is optimized for open rates, click rates, conversions, and long-term customer loyalty with measurable performance reporting.",
  //   img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  // },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black text-white py-10">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
              {/* LEFT TEXT */}
              <div>
                <h1 className="text-4xl font-bold mb-4 text-[#ff7515]">
                  {slide.title}
                </h1>
                <p className="mb-6 text-gray-300">{slide.text}</p>
                <button className="bg-orange-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-orange-500 transition cursor-pointer">
                  See More
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div>
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
