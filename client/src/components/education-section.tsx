import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, GraduationCap, Trophy, Star, Medal } from "lucide-react";
import pmpCertificate from "@/assets/pmp-certificate.pdf";

export default function EducationSection() {
  const educationItems = [
    {
      degree: "Master of Business Administration (MBA)",
      university: "Deakin University, Melbourne",
      years: "2018–2020",
      achievements: ["High Distinction", "GMAT Score: 700"],
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      degree: "Bachelor of Engineering (Industrial Engineering)",
      university: "JSS Academy of Technical Education, Bangalore",
      years: "2012–2016", 
      achievements: ["GPA: 6.4/7"],
      icon: Trophy,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const handleDownloadPMPCertificate = () => {
    const link = document.createElement('a');
    link.href = pmpCertificate;
    link.download = 'Suhas_Bhushan_PMP_Certificate.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-16 px-6 max-w-6xl mx-auto bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <h2 className="text-3xl font-semibold mb-10 text-center gradient-text text-enhanced" data-testid="education-title">
        Education & Certifications
      </h2>
      
      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {educationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group hover:scale-105" data-testid={`education-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item.years}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.degree}</h3>
                <p className="text-muted-foreground mb-4">{item.university}</p>
                <div className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* PMP Certification */}
      <Card className="enhanced-card bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                <Award className="h-6 w-6 enhanced-icon glow-icon float-animation" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-800 text-enhanced flex items-center">
                  PMP Certification
                  <Medal className="h-5 w-5 text-yellow-500 ml-2" />
                </h3>
                <p className="text-blue-600 text-sm">Project Management Institute (2025–2028)</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDownloadPMPCertificate}
              className="enhanced-button border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
              data-testid="button-download-pmp-cert"
            >
              <Download className="mr-2 h-4 w-4 enhanced-icon" />
              View Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
