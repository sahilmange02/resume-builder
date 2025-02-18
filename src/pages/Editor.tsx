import React, { useState, useRef } from "react";
import ResumeForm from "../components/resumeForm";
import ResumePreview from "../components/resumePreview";
import DownloadButton from "../components/downloadButton";

const Editor: React.FC = () => {
  const [resumeData, setResumeData] = useState({ name: "", email: "", phone: "" });
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex p-4 gap-4">
      <ResumeForm onUpdate={setResumeData} />
      <div ref={resumeRef}>
        <ResumePreview data={resumeData} />
      </div>
      <DownloadButton resumeRef={resumeRef} />
    </div>
  );
};

export default Editor;
