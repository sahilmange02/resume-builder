import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Build Your Professional Resume in Minutes!
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Create a polished and professional resume effortlessly. Choose a template, 
        fill in your details, and download your resume instantly.
      </p>

      {/* Steps Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How It Works?</h2>
        <ul className="text-gray-600 text-left list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Step 1:</span> Choose a resume template that fits your style.</li>
          <li><span className="font-semibold">Step 2:</span> Enter your personal details, experience, and skills.</li>
          <li><span className="font-semibold">Step 3:</span> Preview and download your resume as a PDF.</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <Link to="/editor" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg shadow-md transition duration-300">
        Get Started - Create Resume
      </Link>
    </div>
  );
};

export default Home;
