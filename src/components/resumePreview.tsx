import React from "react";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
}

const ResumePreview: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="p-4 border bg-gray-100 w-1/2">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default ResumePreview;
