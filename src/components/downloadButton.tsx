import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// Define your DownloadButton component
const DownloadButton: React.FC<{ resumeRef: React.RefObject<HTMLDivElement> }> = ({ resumeRef }) => {
  // Correctly use the hook
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current as HTMLElement | null,  // Ensure it returns a valid element
  });

  return (
    <button onClick={handlePrint} className="bg-green-500 text-white p-2">
      Download PDF
    </button>
  );
};

export default DownloadButton;
