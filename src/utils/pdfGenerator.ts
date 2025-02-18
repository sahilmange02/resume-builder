import jsPDF from 'jspdf';

export const generatePDF = (name: string, contact: string) => {
  const doc = new jsPDF();

  doc.text('Resume', 20, 20);
  doc.text(`Name: ${name}`, 20, 40);
  doc.text(`Contact: ${contact}`, 20, 50);

  // Add other sections of the resume here.

  doc.save('resume.pdf');
};
