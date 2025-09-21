import resumePDF from '@/assets/suhas-resume.pdf';

export const generateResumePDF = () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Suhas_Bhushan_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};