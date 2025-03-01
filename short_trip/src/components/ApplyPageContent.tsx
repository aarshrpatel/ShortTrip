"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ApplyPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get("jobId");
  const [jobTitle, setJobTitle] = useState<string>("");

  // Map jobId to job title (simulate lookup; replace with real API/CMS integration as needed)
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

  // Original fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // New fields
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("jobTitle", jobTitle);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("zip", zip);
      formData.append("linkedin", linkedin);
      formData.append("coverLetter", coverLetter);
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const res = await fetch("/api/career/apply", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setCity("");
        setState("");
        setZip("");
        setLinkedin("");
        setCoverLetter("");
        setResumeFile(null);
        // Navigate to the career page after successful submission
        router.push("/career");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-mutecolor text-foreground flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apply for {jobTitle}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Basic Info */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Address Fields */}
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium">
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://www.linkedin.com/in/yourprofile"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium">Cover Letter (optional)</label>
            <textarea
              name="coverLetter"
              placeholder="Write your cover letter here..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              rows={5}
            />
          </div>
          {/* Resume File Upload */}
          <div>
            <label className="block text-sm font-medium">Resume (PDF, DOC, DOCX)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setResumeFile(e.target.files[0]);
                }
              }}
              className="w-full"
              required
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <Link href="/career">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="bg-red text-white rounded-lg px-4 py-2"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {status === "success" && (
            <p className="mt-2 text-green-500 text-center">
              Application sent!
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-500 text-center">
              Error sending application. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
