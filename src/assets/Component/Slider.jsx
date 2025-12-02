import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    // When current reaches length (clone slide), jump instantly to 0 without transition
    if (current === slides.length) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(0vw)`;

      // Force reflow to apply immediate jump
      sliderRef.current.offsetHeight;

      // Re-enable transition
      sliderRef.current.style.transition = "transform 0.7s ease-in-out";

      // Reset current to 0 immediately without animation
      setCurrent(0);
    } else {
      // Normal sliding with transition
      sliderRef.current.style.transform = `translateX(-${current * 100}vw)`;
    }
  }, [current]);

  return (
    <div className="w-full overflow-hidden bg-black text-white py-10">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${(slides.length + 1) * 100}vw`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-[#ff7515]">
                  {slide.title}
                </h1>
                <p className="mb-6 text-gray-300">{slide.text}</p>
                <Link
                  to="/contact"
                  className="bg-orange-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-orange-500 transition inline-block"
                >
                  Book Meeting
                </Link>
              </div>
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

        <div className="w-screen flex-shrink-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#ff7515]">
                {slides[0].title}
              </h1>
              <p className="mb-6 text-gray-300">{slides[0].text}</p>
              <Link
                to="/contact"
                className="bg-orange-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-orange-500 transition cursor-pointer inline-block"
              >
                Book Meeting
              </Link>
            </div>
            <div>
              <img
                src={slides[0].img}
                alt="slide"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
