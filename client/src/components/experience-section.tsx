import { Card, CardContent } from "@/components/ui/card";
import { SiAmazon, SiDoordash } from "react-icons/si";
import volyLogo from "@/assets/voly-logo.png";

export default function ExperienceSection() {
  const VolyIcon = () => (
    <img 
      src={volyLogo} 
      alt="Voly" 
      className="w-8 h-8 rounded object-contain bg-white p-1"
    />
  );

  const experiences = [
    {
      title: "Amazon – Program Manager, Driver Growth (2024–Present)",
      company: "Amazon",
      icon: SiAmazon,
      iconColor: "text-orange-500",
      challenge: "Rising acquisition costs and inconsistent onboarding experience.",
      action: "Led cross-functional initiatives with product, operations, and marketing to streamline onboarding, improve app UX, and deploy an AI chatbot.",
      impact: "Delivered <strong>$1.1M annual savings</strong>, cut onboarding time by <strong>42%</strong>, and increased retention <strong>34%</strong>."
    },
    {
      title: "Amazon – Program Manager, Driver Experience (2022–2024)",
      company: "Amazon",
      icon: SiAmazon,
      iconColor: "text-orange-500",
      challenge: "High customer support costs and limited regional reach.",
      action: "Designed scalable processes for lifecycle improvements, partnered with supply chain and retail teams to unlock new markets, and embedded compliance strategies.",
      impact: "Reduced support costs by <strong>$200K/year</strong>, expanded coverage to <strong>10 new regions</strong>, and generated <strong>$400K in annual savings</strong> through route optimization."
    },
    {
      title: "Voly – Strategy Manager, Growth and Efficiency (2022)",
      company: "Voly",
      icon: VolyIcon,
      iconColor: "text-orange-600",
      challenge: "Rapid expansion needs with operational inefficiencies in dark store operations and high rider acquisition costs.",
      action: "Led end-to-end integration for 15 dark store launches, optimized delivery windows and buying strategy, and developed Melbourne market entry strategy.",
      impact: "Reduced fresh grocery costs by <strong>18%</strong>, cut perishable waste by <strong>22%</strong>, achieved <strong>40% reduction in rider acquisition costs</strong> saving <strong>$150K annually</strong>, and acquired <strong>3,000+ customers in 4 weeks</strong>."
    },
    {
      title: "DoorDash – Strategy & Operations (2019–2022)",
      company: "DoorDash",
      icon: SiDoordash,
      iconColor: "text-red-500",
      challenge: "Surging demand during COVID and risk of driver churn.",
      action: "Orchestrated rapid supply expansion, developed data-driven retention strategies, and partnered with product teams to enhance onboarding and app usability.",
      impact: "Scaled supply capacity <strong>10x</strong>, reduced cancellations from <strong>15% → 3.7%</strong>, and cut churn by <strong>20%</strong>."
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center gradient-text text-enhanced" data-testid="experience-title">
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="enhanced-card bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300" data-testid={`experience-card-${index}`}>
            <CardContent className="p-6">
              <div className="flex items-start mb-3">
                <div className={`mr-3 mt-1 ${exp.iconColor}`}>
                  <exp.icon className="w-6 h-6 enhanced-icon glow-icon" />
                </div>
                <h3 className="font-bold text-xl text-enhanced">{exp.title}</h3>
              </div>
              <p className="mb-2"><strong>Challenge:</strong> {exp.challenge}</p>
              <p className="mb-2"><strong>Action:</strong> {exp.action}</p>
              <p><strong>Impact:</strong> <span dangerouslySetInnerHTML={{ __html: exp.impact }} /></p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10 text-muted-foreground">
        <p><em>Past Roles: Voly (2022), Meditrian (2017–2018), Amazon India (2016–2017)</em></p>
      </div>
    </section>
  );
}
