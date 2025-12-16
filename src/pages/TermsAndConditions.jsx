import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-orange-500 mb-2 text-center">
          Terms & Conditions
        </h1>

        {/* <p className="text-center text-sm text-gray-300 mb-6">
          <strong>Effective Date:</strong> 9th June 2025
        </p> */}

        <p className="text-white mb-8 leading-relaxed text-center">
          Welcome to <strong>Thinkbhiz High Tech</strong>! These Terms and
          Conditions (“Terms”) govern your access to and use of
          <strong> www.Thinkbhiz High Tech.com</strong> (“Platform”, “Website”,
          “we”, “our”, or “us”). By using our services, you agree to comply with
          these Terms. If you do not agree, please do not use the Website.
        </p>

        {/* 1. Use of Website */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
          <p className="mb-4">
            Thinkbhiz High Tech is a local business directory that allows users
            to discover and connect with service providers across various
            categories. You may use the Website to:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Search for local businesses and services</li>
            <li>View business profiles, contact information, and reviews</li>
            <li>List your business and manage your listing</li>
          </ul>
          <p className="mt-4">
            You agree to use the Website only for lawful purposes and in
            accordance with these Terms.
          </p>
        </section>

        {/* 2. User Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              You will not post false, misleading, or inappropriate content
            </li>
            <li>
              You are responsible for the accuracy of information provided
            </li>
            <li>You will not harm, harass, or impersonate others</li>
            <li>
              You will not attempt to hack, scrape, or disrupt the Website
            </li>
          </ul>
        </section>

        {/* 3. Business Listings */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Business Listings</h2>
          <p>
            Businesses are solely responsible for the content they list on
            Thinkbhiz High Tech. We do not guarantee the quality, accuracy, or
            availability of any services. However, we reserve the right to
            moderate, edit, or remove content that violates our policies.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content, design, logos, graphics, and functionality on this
            Website are the property of DialUp365 unless otherwise stated. Any
            unauthorized use is strictly prohibited.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            5. Limitation of Liability
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Your use or inability to use the Website</li>
            <li>
              Any interactions or transactions between users and businesses
            </li>
            <li>Errors, inaccuracies, or omissions in listings</li>
          </ul>
          <p className="mt-3">
            Use of the platform is entirely at your own risk.
          </p>
        </section>

        {/* 6. Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            Website if you violate these Terms or engage in illegal or harmful
            activities.
          </p>
        </section>

        {/* 7. Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to the Terms
          </h2>
          <p>
            We may update these Terms periodically. Continued use of the Website
            after changes indicates your acceptance of the updated Terms.
          </p>
        </section>

        {/* 8. Governing Law */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes
            will be subject to the exclusive jurisdiction of the courts located
            in
            <strong> Noida , Uttar Pradesh</strong>.
          </p>
        </section>

        {/* 9. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="font-semibold">
            📧 info@thinkbizhightech.com <br />
            📞 +91-85120 01218
          </p>
        </section>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default TermsAndConditions;
