// app/career/apply/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ApplyPage = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [jobTitle, setJobTitle] = useState<string>("");

  // Map jobId to job title (simulate lookup; replace with real data as needed)
  useEffect(() => {
    const jobTitles: Record<string, string> = {
      "1": "Fuel Station Attendant",
      "2": "Service Manager",
      "3": "Maintenance Technician",
      "4": "Cashier & Store Associate",
    };
    if (jobId && jobTitles[jobId]) {
      setJobTitle(jobTitles[jobId]);
    } else {
      setJobTitle("the selected position");
    }
  }, [jobId]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Construct the mailto: link with subject and body
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(`Hi,\n\nI would love to apply for the ${jobTitle} position at Short Trip. I have provided my personal information below:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    window.location.href = `mailto:aarsh@shorttrip.com?subject=${subject}&body=${body}`;
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-mutecolor text-foreground flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apply for {jobTitle}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Link href="/career">
              <button type="button" className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2">
                Cancel
              </button>
            </Link>
            <button type="submit" disabled={submitting} className="bg-red text-white rounded-lg px-4 py-2">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
