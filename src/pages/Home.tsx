import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>
      <Link to="/editor" className="bg-blue-500 text-white p-2">Create Resume</Link>
    </div>
  );
};

export default Home;
