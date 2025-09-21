import { useState } from "react";
import { Users, DollarSign, RefreshCw, Target, MapPin, Settings, Cog, Bot, BarChart, TrendingUp } from "lucide-react";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const skills = [
    { name: "Stakeholder Management", icon: Users, color: "from-blue-400 to-blue-600" },
    { name: "P&L Optimization", icon: DollarSign, color: "from-green-400 to-green-600" }, 
    { name: "Change Management", icon: RefreshCw, color: "from-purple-400 to-purple-600" },
    { name: "Customer Lifecycle", icon: Target, color: "from-red-400 to-red-600" },
    { name: "Market Entry", icon: MapPin, color: "from-indigo-400 to-indigo-600" },
    { name: "Program Management", icon: Settings, color: "from-gray-400 to-gray-600" },
    { name: "Product Operations", icon: Cog, color: "from-yellow-400 to-yellow-600" },
    { name: "AI Deployment", icon: Bot, color: "from-cyan-400 to-cyan-600" },
    { name: "Process Optimization", icon: BarChart, color: "from-orange-400 to-orange-600" },
    { name: "Data Insights", icon: TrendingUp, color: "from-teal-400 to-teal-600" }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center gradient-text text-enhanced" data-testid="skills-title">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          const isHovered = hoveredSkill === index;
          return (
            <div 
              key={index}
              className={`group relative p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${isHovered ? 'scale-105 shadow-xl' : ''}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              data-testid={`skill-card-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
