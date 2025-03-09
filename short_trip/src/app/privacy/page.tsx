// app/privacy/page.tsx
import Head from "next/head";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Short Trip</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Short Trip to learn how we collect, use, and protect your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Privacy Policy | Short Trip" />
        <meta
          property="og:description"
          content="Read the Privacy Policy for Short Trip to learn how we collect, use, and protect your personal information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shorttrip.com/privacy" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Privacy Policy | Short Trip" />
        <meta
          name="twitter:description"
          content="Read the Privacy Policy for Short Trip to learn how we collect, use, and protect your personal information."
        />
      </Head>
      <main className="pt-24 max-w-3xl mx-auto px-4 py-12 md:px-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="mb-4 text-lg text-gray-700">
          Your privacy is important to us at Short Trip. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4 text-gray-600">
          We may collect personal information such as your name, email address, phone number, and other details when you voluntarily provide them to us (for example, through our contact forms or registration pages). We also collect non-personal information using cookies and similar technologies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4 text-gray-600">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Provide, maintain, and improve our services.</li>
          <li>Communicate with you about updates, offers, and changes to our services.</li>
          <li>Monitor and analyze usage and trends to enhance user experience.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Cookies and Tracking Technologies</h2>
        <p className="mb-4 text-gray-600">
          We use cookies and similar tracking technologies to improve your experience, analyze website usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Third-Party Disclosures</h2>
        <p className="mb-4 text-gray-600">
          We do not sell or share your personal information with third parties for their marketing purposes. We may share your information with trusted partners who assist us in operating our website, provided they agree to keep your information confidential.
        </p>
        <br />
        <p className="mb-4 text-gray-600">SMS Opt-in and phone number collected for SMS communications purposes will not be shared with any third party and affiliates for marketing purposes.</p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Security</h2>
        <p className="mb-4 text-gray-600">
          We implement various security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Your Rights</h2>
        <p className="mb-4 text-gray-600">
          You have the right to access, update, or delete your personal information. If you would like to exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Contact Us</h2>
        <p className="mb-4 text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <a className="text-blue-600 hover:underline" href="mailto:privacy@shorttrip.com">
            privacy@shorttrip.com
          </a>
        </p>
        <p className="mt-8 text-sm text-gray-500">
          Last updated: [Insert Date]
        </p>
      </main>
    </>
  );
}
