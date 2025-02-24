// app/career/page.tsx
import Link from "next/link";

// Define a type for a job listing
export type Job = {
  id: string;
  title: string;
  location: string;
  description: string;
};

// Simulate fetching job listings (replace with real API/CMS integration as needed)
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

export default async function CareerPage() {
  const jobListings = await getJobListings();

  return (
    <div className="min-h-screen bg-mutecolor text-foreground">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center">
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Careers at Short Trip</h2>
          <p className="mt-4 text-lg">
            Join our team and help us deliver outstanding service at our gas stations!
          </p>
        </div>
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <li
              key={job.id}
              className="bg-white text-foreground rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <Link href={`/career/apply?jobId=${job.id}`}>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.location}</p>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                <div className="bg-red p-4 text-center">
                  <span className="text-white font-bold">Apply Now</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
