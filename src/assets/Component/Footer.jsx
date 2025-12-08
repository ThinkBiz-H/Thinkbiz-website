import { Link } from "react-router-dom";
import trackEvent from "../../trackEvent";

import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* 1️⃣ SOCIAL */}
          <div>
            <img src="/logo-black.svg" alt="Logo" className="w-44 h-auto" />

            <p className="text-gray-300 mt-2 leading-relaxed">
              We are a Software Company committed to delivering cutting-edge
              solutions...
            </p>

            <div className="flex flex-col gap-1 mb-1">
              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-1.png.webp"
                className="rounded"
                alt=""
              />
            </div>

            <Link
              to="/package"
              onClick={() =>
                trackEvent("footer_click", { location: "Pay Now Button" })
              }
            >
              <button className="px-5 py-2 bg-[#ff7515] hover:bg-white hover:text-black transition rounded-lg font-semibold">
                Pay Now
              </button>
            </Link>
          </div>

          {/* 2️⃣ QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    trackEvent("footer_navigation", { page: "Home" })
                  }
                  className="hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    trackEvent("footer_navigation", { page: "About" })
                  }
                  className="hover:text-orange-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/Career"
                  onClick={() =>
                    trackEvent("footer_navigation", { page: "Career" })
                  }
                  className="hover:text-orange-500"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/policies"
                  onClick={() =>
                    trackEvent("footer_navigation", { page: "Policies" })
                  }
                  className="hover:text-orange-500"
                >
                  Policies
                </Link>
              </li>

              <li>
                <Link
                  to="/Package"
                  onClick={() =>
                    trackEvent("footer_navigation", { page: "Pricing" })
                  }
                  className="hover:text-orange-500"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/service/web"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "Web Development",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Web Design & Development
                </Link>
              </li>

              <li>
                <Link
                  to="/service/app"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "App Development",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Android & iOS App Development
                </Link>
              </li>

              <li>
                <Link
                  to="/service/digital-marketing"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "Digital Marketing",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Digital Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/service/seo"
                  onClick={() =>
                    trackEvent("footer_service_click", { service: "SEO" })
                  }
                  className="hover:text-orange-500"
                >
                  SEO Services
                </Link>
              </li>

              <li>
                <Link
                  to="/service/software"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "Software Development",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Software Development
                </Link>
              </li>

              <li>
                <Link
                  to="/service/email"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "Email Marketing",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Email & Affiliate Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/service/brand"
                  onClick={() =>
                    trackEvent("footer_service_click", {
                      service: "Brand Promotion",
                    })
                  }
                  className="hover:text-orange-500"
                >
                  Brand Promotion
                </Link>
              </li>
            </ul>
          </div>

          {/* 4️⃣ CONTACT + SOCIAL */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Contact-Us
            </h3>

            <p className="font-bold text-[#ff7515] text-xl">
              ThinkBiz High Tech Pvt Ltd
            </p>

            <div className="flex items-start gap-3 text-gray-300 mt-3">
              <FaMapMarkerAlt size={25} className="text-[#ff7515] mt-1" />
              <p>B-46, Sector 63, Noida, UP 201301</p>
            </div>

            {/* Phone */}
            <div
              onClick={() => trackEvent("footer_phone_click")}
              className="flex items-center gap-3 text-gray-300 mt-3 cursor-pointer"
            >
              <FaPhoneAlt size={20} className="text-[#ff7515]" />
              <p>+91 85120 01218</p>
            </div>

            {/* Email */}
            <div
              onClick={() => trackEvent("footer_email_click")}
              className="flex items-center gap-3 text-gray-300 mt-3 cursor-pointer"
            >
              <FaEnvelope size={20} className="text-[#ff7515]" />
              <p>info@thinkbizhightech.com</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5 text-white">
              <a
                href="https://www.facebook.com/ThinkBizHT/about/?_rdr"
                onClick={() =>
                  trackEvent("footer_social", { social: "facebook" })
                }
                target="_blank"
              >
                <FaFacebookF size={26} className="hover:text-orange-500" />
              </a>

              <a
                href="https://wa.me/918512001218"
                onClick={() =>
                  trackEvent("footer_social", { social: "whatsapp" })
                }
                target="_blank"
              >
                <FaWhatsapp size={26} className="hover:text-orange-500" />
              </a>

              <a
                href="https://in.linkedin.com/company/thinkbizhightech"
                onClick={() =>
                  trackEvent("footer_social", { social: "linkedin" })
                }
                target="_blank"
              >
                <FaLinkedinIn size={26} className="hover:text-orange-500" />
              </a>

              <a
                href="https://www.instagram.com/thinkbizht/"
                onClick={() =>
                  trackEvent("footer_social", { social: "instagram" })
                }
                target="_blank"
              >
                <FaInstagram size={26} className="hover:text-orange-500" />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-gray-700" />

        <p className="text-center text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} ThinkBiz High Tech Pvt. Ltd. | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
