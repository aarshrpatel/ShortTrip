import Image from "next/image";
import career from "@/assets/landing-employees.svg";

export default function Home() {
  return (
    <div className="h-screen">
      {/* Hero Image */}
      
      {/* Food, Hot Drinks, Cold Drinks Promotion */}

      {/* Store Images with Text */}

      {/* Our Story Description */}

      {/* Career Description */}
      <div className="flex flex-row items-center justify-center gap-20 py-16">
        <div className="max-w-md">
          <h2 className="text-4xl font-extrabold mb-4">Join Our Family</h2>
          <p className="text-lg font-bold text-gray-700">At Short Trip, we’re more than just a team—we’re a family. We’re looking for passionate, hardworking individuals who want to grow with us and make a difference in the communities we serve. Whether you're starting your career or looking for your next opportunity, we have a place for you.</p>
        </div>

        <div className="w-1/4">
          <Image src={career} alt="Two employees smiling at camera" className="rounded-lg object-cover"/>
        </div>
      </div>
    </div>
  );
}
