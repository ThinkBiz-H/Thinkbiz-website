import React from "react";
import WhatsAppButton from "../assets/Component/WhatsAppButton";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
          Website Policies
        </h1>

        <p className="text-white mb-6 leading-relaxed text-center">
          This Policy page outlines the rules, terms, and conditions for using
          our website and services. By accessing this website, you accept these
          policies fully. If you do not agree with any part, you must
          discontinue using the website immediately.
        </p>

        {/* Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">1. Privacy Policy</h2>
          <p className="mb-4">
            We respect your privacy and are committed to protecting your
            personal data. Any information shared with us such as your name,
            email, phone number, or any other identity details will be used
            solely for the purpose of communication, project updates, and
            service improvements.
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>We do not sell or share personal data with third parties.</li>
            <li>Your data is stored securely with restricted access.</li>
            <li>
              You may request the deletion of your data at any time by
              contacting our support team.
            </li>
          </ul>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">2. Terms & Conditions</h2>
          <p className="mb-4">
            By using our website and services, you agree to follow the general
            terms listed below:
          </p>
          <ul className="list-decimal pl-8 space-y-2">
            <li>You will not misuse or attempt to damage the website.</li>
            <li>
              All content including text, images, designs, and code is our
              property. Copying without permission is prohibited.
            </li>
            <li>
              Service quotes and pricing may vary depending on project
              requirements and timelines.
            </li>
            <li>
              Communication must be professional. Misuse of language or abuse
              will result in service termination.
            </li>
          </ul>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">3. Refund Policy</h2>
          <p className="mb-4">
            Our refund policy ensures fairness for both the client and the
            service provider. Refunds are provided based on the progress of the
            project:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              Full refund if the project has not been started or no resources
              have been allocated.
            </li>
            <li>
              Partial refund if the project is under progress depending on the
              completion percentage.
            </li>
            <li>No refund once the project is completed and delivered.</li>
          </ul>
        </section>

        {/* Cookie Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">4. Cookie Policy</h2>
          <p className="mb-4">
            Our website may use cookies to improve user experience, track
            website performance, and personalize content.
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>You can disable cookies through your browser settings.</li>
            <li>
              Some features may not function correctly if cookies are disabled.
            </li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">5. Disclaimer</h2>
          <p className="mb-4">
            Information on this website is provided for general purposes only.
            We do not guarantee accuracy, completeness, or reliability of any
            content.
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              We are not responsible for any losses or damages arising from use
              of this website.
            </li>
            <li>
              External links are provided for convenience; we do not control or
              endorse their content.
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            6. Contact Information
          </h2>
          <p>
            If you have any questions regarding our policies, feel free to
            contact us at:
          </p>
          <p className="mt-2 font-semibold">
            Email: support@example.com <br />
            Phone: +91-8512001218
          </p>
        </section>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Policies;
