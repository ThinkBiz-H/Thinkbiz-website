import { motion } from "framer-motion";
const reviews = [
  {
    name: "Rahul Verma",
    rating: "4.8 / 5",
    text: "Amazing service and highly professional approach. They helped our business grow digitally with outstanding strategy.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aditi Sharma",
    rating: "4.9 / 5",
    text: "Very satisfied with the digital marketing support. Great team, on-time delivery, and excellent results!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikas Singh",
    rating: "4.7 / 5",
    text: "Website quality, UI and performance was beyond expectations. Truly recommended for business growth.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

const RatingSection = () => {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-[#ff7515]">
            What Our Clients Say
          </h2>
          <p className="text-white mt-3 leading-relaxed text-3xl">
            Over the years we have worked with customers globally. Our goal is
            to deliver meaningful digital results, business growth and customer
            satisfaction. Here’s what our clients have to say.
          </p>
        </motion.div>

        {/* AUTO SLIDING REVIEWS */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] border rounded-xl p-6 shadow-lg bg-white hover:scale-105 transition"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <img
                    className="w-6 mb-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                  />
                </div>

                <div className="flex justify-center mb-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>

                <h3 className="text-center text-lg font-bold text-[#ff7515]">
                  {item.rating}
                </h3>

                <p className="text-center text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.text}
                </p>

                <h4 className="text-center mt-3 font-semibold">{item.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
