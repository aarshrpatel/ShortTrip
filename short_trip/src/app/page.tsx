import Image from "next/image";
import career from "@/assets/landing-employees.svg";
import TransitionSVG from "@/components/TransitionSVG";
import st110 from "@/assets/ST110.svg";

export default function Home() {
  return (
    <div className="">
      {/* Hero Image */}
      <div className="h-[80vh] flex flex-row items-center justify-center">
        <Image src={st110} alt="Champ Chicken In Our Store with Employee Smiling" className="h-[90%] w-[90%]"/>
      </div>
      {/* Food, Hot Drinks, Cold Drinks Promotion */}
      <TransitionSVG/>

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
