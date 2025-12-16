import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const ShippingAndDelivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-orange-500 mb-2 text-center">
          Shipping & Delivery Policy
        </h1>

        {/* <p className="text-center text-sm text-gray-300 mb-6">
          <strong>Effective Date:</strong> 4th July 2025
        </p> */}

        <p className="text-white mb-8 leading-relaxed text-center">
          Thank you for choosing <strong>Thinkbhiz High Tech</strong> — your
          trusted local business listing platform. Please note that all our
          offerings are
          <strong> digital services</strong>, and we do not ship any physical
          products.
        </p>

        {/* 1. Digital Service Fulfillment */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            1. Digital Service Fulfillment
          </h2>
          <p className="mb-4">
            Thinkbhiz High Tech provides digital listing and promotional
            services including:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Local Business Listings</li>
            <li>Social Media Promotions</li>
            <li>Custom Videos and Graphics</li>
            <li>Website Design and Development</li>
            <li>WhatsApp Automation Tool Access</li>
            <li>Google My Business Setup</li>
          </ul>
          <p className="mt-4">
            All services are delivered electronically and do not involve any
            physical shipping.
          </p>
        </section>

        {/* 2. Service Activation Timelines */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            2. Service Activation Timelines
          </h2>
          <p className="mb-4">
            Upon successful payment and submission of your business details,
            services are activated as per the estimated timelines below:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/20 rounded-xl overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3 border-b border-white/20">
                    Service Type
                  </th>
                  <th className="text-left p-3 border-b border-white/20">
                    Estimated Activation Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3">Basic Listing</td>
                  <td className="p-3">Within 24–48 hours</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3">Standard & Premium Listings</td>
                  <td className="p-3">2–5 working days (post verification)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3">WhatsApp Automation (ChatCrest)</td>
                  <td className="p-3">3–7 working days</td>
                </tr>
                <tr>
                  <td className="p-3">Custom Website & GMB Setup</td>
                  <td className="p-3">7–14 working days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            Note: Timelines may vary depending on the completeness of the
            information provided and customer response time.
          </p>
        </section>

        {/* 3. Communication & Delivery */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            3. Communication and Delivery Mode
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              Services are delivered via email, WhatsApp, or directly on your
              Thinkbhiz High Tech business profile
            </li>
            <li>
              You will be notified on your registered email and phone number
              once services are activated
            </li>
          </ul>
        </section>

        {/* 4. Delays */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            4. Delays and Exceptions
          </h2>
          <p className="mb-4">
            While we strive to meet committed timelines, delays may occur due
            to:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Incomplete or incorrect business information</li>
            <li>Delay in document verification or media submission</li>
            <li>Technical issues or server maintenance</li>
            <li>National holidays or unforeseen circumstances</li>
          </ul>
          <p className="mt-4">
            In such cases, we will notify you and provide an updated delivery
            timeline.
          </p>
        </section>

        {/* 5. No Physical Shipping */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            5. No Physical Shipping
          </h2>
          <p>
            Thinkbhiz High Tech is a digital-only platform. There is no physical
            shipping, tracking number, or courier service applicable to any of
            our offerings.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Need Help?</h2>
          <p className="font-semibold">
            📧 info@thinkbizhightech.com <br />
            📞 WhatsApp: +91-85120 01218 <br />
            🌐 www.Thinkbhiz High Tech.com
          </p>
        </section>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default ShippingAndDelivery;
