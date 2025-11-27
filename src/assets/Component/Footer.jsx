import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* TOP – LOGO */}
        <div className="mb-10">
          <img src="/logo-black.svg" alt="Logo" className="w-44 h-auto" />
        </div>

        {/* 5 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* 1️⃣ SOCIAL */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">Social</h3>

            {/* Icons */}
            <div className="flex gap-4 mb-4 text-white">
              <a
                href="https://www.facebook.com/ThinkBizHT/about/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-500 transition"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://wa.me/918512001218"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-orange-500 transition"
              >
                <FaWhatsapp size={28} />
              </a>

              <a
                href="https://in.linkedin.com/company/thinkbizhightech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-500 transition"
              >
                <FaLinkedinIn size={28} />
              </a>
              <a
                href="https://www.instagram.com/thinkbizht/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-500 transition"
              >
                <FaInstagram size={28} />
              </a>
            </div>

            {/* 2 Images */}
            <div className="flex flex-col gap-3 mb-4">
              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-1.png.webp"
                className="rounded"
                alt=""
              />
              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-2.png.webp"
                className="rounded"
                alt=""
              />
            </div>

            {/* Button */}
            <button className="px-5 py-2 bg-[#ff7515] hover:bg-white hover:text-black transition rounded-lg font-semibold">
              Pay Now
            </button>
          </div>

          {/* 2️⃣ QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>
                <Link to="/Career" className="hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>Policies</li>
            </ul>
          </div>

          {/* 3️⃣ SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>SEO Services</li>
              <li>Video Editor</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          {/* 4️⃣ INDUSTRIES */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Industries
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>E-Commerce</li>
              <li>Technology & SaaS</li>
              <li>Education & Training</li>
              <li>Healthcare & Wellness</li>
              <li>Real Estate</li>
              <li>Finance & Banking</li>
              <li>Retail & FMCG</li>
              <li>Automobile Industry</li>
              <li>Hospitality & Restaurants</li>
              <li>Media & Entertainment</li>
            </ul>
          </div>

          {/* 5️⃣ LOCATION */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">Location</h3>
            <p className="font-bold text-[#ff7515]">
              ThinkBhiz High Tech Pvt .Ltd
            </p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              B-46, B Block, Sector 63, Noida, Uttar Pradesh 201301, India{" "}
              <br></br> Time 10:00 - 06:00
            </p>
          </div>
        </div>
        {/* BOTTOM COPYRIGHT LINE */}
        <hr className="mt-12 border-gray-700" />

        <p className="text-center text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} ThinkBhiz High Tech Pvt. Ltd. | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
