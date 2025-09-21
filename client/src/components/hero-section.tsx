import { Button } from "@/components/ui/button";
import { Mail, Download, Phone, Linkedin, Briefcase, Play } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import profileImage from "@assets/pic_1757486782255.jpg";
import introVideo from "@assets/Perfect-Selfie-Videos_1757572831994.mp4";
import { generateResumePDF } from "@/utils/pdf-generator";

export default function HeroSection() {

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadIntroVideo = () => {
    const link = document.createElement('a');
    link.href = introVideo;
    link.download = 'Suhas-Bhushan-Intro-Video.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadResume = () => {
    generateResumePDF();
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight gradient-text text-enhanced" data-testid="hero-name">
                Suhas Bhushan
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium" data-testid="hero-title">
                Program Manager | Strategy and Operations
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" data-testid="hero-summary">
              👋 Hi, I'm Suhas. With over six years in program management, I've led transformative initiatives across tech, logistics, and retail. I help businesses scale operations, reduce costs, and leverage AI and data to create sustainable, future-ready solutions. My focus is on turning complex challenges into clear, actionable strategies that drive measurable impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleContactClick}
                className="enhanced-button bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadResume}
                className="enhanced-button rounded-2xl px-6 py-3 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4 enhanced-icon" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadIntroVideo}
                className="enhanced-button rounded-2xl px-6 py-3 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 shadow-md hover:shadow-lg transition-all duration-300"
                data-testid="button-download-intro-video"
              >
                <Play className="mr-2 h-4 w-4 enhanced-icon" />
                Intro Video
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a 
                href={`mailto:${resumeData.personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5 enhanced-icon glow-icon" />
              </a>
              <a 
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5 enhanced-icon glow-icon" />
              </a>
              <a 
                href={`tel:${resumeData.personal.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-phone"
              >
                <Phone className="h-5 w-5 enhanced-icon glow-icon" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-card shadow-2xl bg-card">
                <img 
                  src={profileImage}
                  alt="Suhas Bhushan - Professional Photo"
                  className="w-full h-full object-cover"
                  data-testid="profile-image"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg float-animation">
                <Briefcase className="w-5 h-5 enhanced-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
