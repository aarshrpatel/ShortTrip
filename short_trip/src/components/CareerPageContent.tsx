"use client";

import React from "react";
import Link from "next/link";
import type { Job } from "@/app/career/page"; // Import the Job type from the server file

interface CareerPageContentProps {
  jobListings: Job[];
}

export default function CareerPageContent({ jobListings }: CareerPageContentProps) {
  // Removed unused variable 'selectedLocation' and its setter

  return (
    <div className="min-h-screen bg-mutecolor text-foreground">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/career-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Build Your Future with Short Trip
          </h1>
          <p className="mt-4 text-lg text-white">
            Fuel your career with exciting opportunities at our gas stations.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="container mx-auto py-16 px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Careers at Short Trip</h2>
          <p className="mt-4 text-lg">
            Join our team and help us deliver outstanding service at our gas stations!
          </p>
        </div>
        {/* Grid of job cards */}
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <li
              key={job.id}
              className="bg-white text-foreground rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 cursor-pointer"
              // Removed onClick handler since 'selectedLocation' is no longer used.
            >
              {/* Flex container to keep main content and footer separated */}
              <Link href={`/career/apply?jobId=${job.id}`}>
                <div className="flex flex-col h-full">
                  {/* Main content area */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.location}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  {/* Footer area: "Apply Now" stays at the bottom */}
                  <div className="bg-red p-4 text-center">
                    <span className="text-white font-bold">Apply Now</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
