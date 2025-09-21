import { Card, CardContent } from "@/components/ui/card";
import { SiAmazon, SiDoordash } from "react-icons/si";
import { Bot, TrendingUp, MapPin } from "lucide-react";
import volyLogo from "@/assets/voly-logo.png";

export default function ProjectsSection() {
  const VolyIcon = () => (
    <img 
      src={volyLogo} 
      alt="Voly" 
      className="w-5 h-5 rounded object-contain bg-white p-0.5"
    />
  );

  const projects = [
    {
      title: "AI Chatbot Deployment",
      description: "Cut onboarding time 42% and reduced support escalations 78%.",
      icon: Bot,
      company: "Amazon",
      companyIcon: SiAmazon,
      iconColor: "text-blue-500",
      companyColor: "text-orange-500"
    },
    {
      title: "DoorDash Retention Playbook",
      description: "Scaled driver supply 10x during COVID, cut churn by 20%.",
      icon: TrendingUp,
      company: "DoorDash",
      companyIcon: SiDoordash,
      iconColor: "text-green-500",
      companyColor: "text-red-500"
    },
    {
      title: "Voly Market Entry",
      description: "Launched Melbourne with 3,000+ customers in 4 weeks.",
      icon: MapPin,
      company: "Voly",
      companyIcon: VolyIcon,
      iconColor: "text-purple-500",
      companyColor: "text-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto bg-gradient-to-r from-cyan-50 to-blue-50">
      <h2 className="text-3xl font-semibold mb-10 text-center" data-testid="projects-title">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300" data-testid={`project-card-${index}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`${project.iconColor}`}>
                  <project.icon className="w-6 h-6" />
                </div>
                {project.companyIcon && (
                  <div className={`${project.companyColor}`}>
                    <project.companyIcon className="w-5 h-5" />
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{project.company}</p>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}