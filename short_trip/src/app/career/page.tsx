// app/career/page.tsx
import React from "react";
import CareerPageContent from "@/components/CareerPageContent";

// Define a type for a job listing
export type Job = {
  id: string;
  title: string;
  location: string;
  description: string;
};

// Simulated async function to fetch job listings (replace with real API as needed)
async function getJobListings(): Promise<Job[]> {
  return [
    {
      id: "1",
      title: "Fuel Station Attendant",
      location: "Downtown",
      description:
        "Manage fuel pumps, assist customers, and maintain cleanliness at our busy station.",
    },
    {
      id: "2",
      title: "Service Manager",
      location: "Uptown",
      description:
        "Oversee daily operations, manage staff, and ensure top-notch customer service at the station.",
    },
    {
      id: "3",
      title: "Maintenance Technician",
      location: "Suburban",
      description:
        "Perform regular maintenance, troubleshoot equipment issues, and ensure station safety.",
    },
    {
      id: "4",
      title: "Cashier & Store Associate",
      location: "City Center",
      description:
        "Handle transactions, manage inventory, and provide friendly support in our convenience store.",
    },
  ];
}

// This server component fetches job listings and passes them to a client component.
export default async function CareerPage() {
  const jobListings = await getJobListings();
  return <CareerPageContent jobListings={jobListings} />;
}
