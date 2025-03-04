import jsPDF from 'jspdf';

export const generatePDF = (
  name: string,
  contact: string,
  linkedIn: string,
  summary: string,
  jobTitle: string,
  company: string,
  jobDate: string,
  jobLocation: string,
  experience: string,
  education: string,
  skills: string,
  strengths: string
) => {
  const doc = new jsPDF();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(name || 'YOUR NAME', 20, 20);

  doc.setFontSize(14);
  doc.setTextColor(0, 102, 255); // Blue color for role
  doc.text(summary || 'The role you are applying for?', 20, 30);
  doc.setTextColor(0, 0, 0);

  doc.setFontSize(12);
  doc.text(`📞 ${contact || 'Phone'} | ✉️ Email | 🔗 ${linkedIn || 'LinkedIn/Portfolio'}`, 20, 40);
  doc.line(20, 45, 190, 45); // Black Line

  // Summary Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('SUMMARY', 20, 55);
  doc.setFont('helvetica', 'normal');
  doc.text(summary || 'Briefly explain why you are a great fit for the role.', 20, 65, { maxWidth: 170 });
  doc.line(20, 75, 190, 75);

  // Experience Section
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIENCE', 20, 85);
  doc.setFont('helvetica', 'normal');
  doc.text(jobTitle || 'Title', 20, 95);
  doc.setTextColor(0, 102, 255);
  doc.text(company || 'Company Name', 20, 105);
  doc.setTextColor(0, 0, 0);
  doc.text(`📅 ${jobDate || 'Date Period'} 📍 ${jobLocation || 'Location'}`, 20, 115);
  doc.text(experience || 'Highlight your accomplishments using numbers if possible.', 20, 125, { maxWidth: 170 });
  doc.line(20, 135, 190, 135);

  // Education Section
  doc.setFont('helvetica', 'bold');
  doc.text('EDUCATION', 20, 145);
  doc.setFont('helvetica', 'normal');
  doc.text(education || 'Degree and Field of Study', 20, 155);
  doc.line(20, 165, 190, 165);

  // Skills Section
  doc.setFont('helvetica', 'bold');
  doc.text('SKILLS', 20, 175);
  doc.setFont('helvetica', 'normal');
  doc.text(skills || 'Your skills go here...', 20, 185, { maxWidth: 170 });
  doc.line(20, 195, 190, 195);

  // Strengths Section
  doc.setFont('helvetica', 'bold');
  doc.text('STRENGTHS', 20, 205);
  doc.setFont('helvetica', 'normal');
  doc.text(strengths || 'Explain how it benefits your work.', 20, 215, { maxWidth: 170 });

  // Save the PDF
  doc.save('resume.pdf');
};
