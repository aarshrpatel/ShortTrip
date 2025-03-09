// app/terms/page.tsx (or app/terms-and-conditions/page.tsx)
import Head from "next/head";
import React from "react";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>SMS Terms & Conditions | Short Trip</title>
        <meta
          name="description"
          content="Read the SMS Terms & Conditions for Short Trip. Learn about our SMS consent process, communication types, message frequency, fees, opt-in/out methods, and disclosures."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SMS Terms & Conditions | Short Trip" />
        <meta
          property="og:description"
          content="Read the SMS Terms & Conditions for Short Trip. Learn about our SMS consent process, communication types, message frequency, fees, opt-in/out methods, and disclosures."
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="SMS Terms & Conditions | Short Trip" />
        <meta
          name="twitter:description"
          content="Read the SMS Terms & Conditions for Short Trip. Learn about our SMS consent process, communication types, message frequency, fees, opt-in/out methods, and disclosures."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">SMS Terms & Conditions</h1>
          
          {/* SMS Consent Communication */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              SMS Consent Communication:
            </h2>
            <p className="text-gray-600">
              The information (Phone Number) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
            </p>
          </section>

          {/* Types of SMS Communications */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Types of SMS Communications:
            </h2>
            <p className="text-gray-600 mb-2">
              If you have consented to receive text messages from ShortTrip, you may receive messages related to the following:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li>Appointment reminders</li>
              <li>Follow-up messages</li>
              <li>Billing inquiries</li>
              <li>Promotions or offers (if applicable)</li>
            </ul>
            <p className="text-gray-600">
              Example: "Hello, this is a friendly reminder of your upcoming appointment with Dr. [Name] at [Date] at [Time]. You can reply STOP to opt out of SMS messaging from (Brand Name) at any time.”
            </p>
          </section>

          {/* Message Frequency */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Message Frequency:
            </h2>
            <p className="text-gray-600 mb-2">
              Message frequency may vary depending on the type of communication. For example, you may receive up to [X] SMS messages per week related to your appointments or billing.
            </p>
            <p className="text-gray-600">
              Example: “Message frequency may vary. You may receive up to 2 SMS messages per week regarding your appointments or account status.”
            </p>
          </section>

          {/* Potential Fees for SMS Messaging */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Potential Fees for SMS Messaging:
            </h2>
            <p className="text-gray-600">
              Please note that standard message and data rates may apply, depending on your carrier’s pricing plan. These fees may vary if the message is sent domestically or internationally.
            </p>
          </section>

          {/* Opt-In Method */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Opt-In Method:
            </h2>
            <p className="text-gray-600 mb-2">
              You may opt-in to receive SMS messages from ShortTrip in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li>Verbally, during a conversation</li>
              <li>By submitting an online form</li>
              <li>By filling out a paper form</li>
            </ul>
          </section>

          {/* Opt-Out */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Opt-Out:
            </h2>
            <p className="text-gray-600">
              You can opt out of receiving SMS messages at any time. To do so, simply reply “STOP” to any SMS message you receive. Alternatively, you can contact us directly to request removal from our messaging list.
            </p>
          </section>

          {/* Help */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Help:
            </h2>
            <p className="text-gray-600">
              If you are experiencing any issues, you can reply with the keyword HELP or get help directly from us at (Insert the link).
            </p>
          </section>

          {/* Additional Options */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Additional Options:
            </h2>
            <p className="text-gray-600">
              If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.
            </p>
          </section>

          {/* Standard Messaging Disclosures */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Standard Messaging Disclosures:
            </h2>
            <p className="text-gray-600">
              Message and data rates may apply. You can opt out at any time by texting “STOP”. For assistance, text “HELP” or visit our Privacy Policy and Terms and Conditions pages. Message frequency may vary.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
