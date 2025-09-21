import { Briefcase, Heart, Coffee, Bike, Bot, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const achievements = [
    { icon: Bot, text: "AI-driven automation", color: "text-blue-500" },
    { icon: TrendingUp, text: "$1.7M in cost savings", color: "text-green-500" },
    { icon: Briefcase, text: "6+ years in program management", color: "text-purple-500" }
  ];

  const timeline = [
    { year: "2016", company: "Amazon India", role: "Risk Analysis", color: "bg-orange-500" },
    { year: "2019", company: "DoorDash", role: "Strategy & Operations", color: "bg-red-500" },
    { year: "2022", company: "Voly", role: "Strategy Manager", color: "bg-orange-600" },
    { year: "2022", company: "Amazon Australia", role: "Program Manager", color: "bg-orange-500" }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center gradient-text text-enhanced" data-testid="about-title">
          About Me
        </h2>
        
        {/* Professional Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3 enhanced-icon glow-icon" />
                <h3 className="text-xl font-semibold text-blue-800">Professional Overview</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-professional">
                👋 Hi, I'm Suhas. With over six years in program management, I've led transformative initiatives across tech, logistics, and retail. I help businesses scale operations, reduce costs, and leverage AI and data to create sustainable, future-ready solutions. My focus is on turning complex challenges into clear, actionable strategies that drive measurable impact.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-500 mr-3 enhanced-icon glow-icon" />
                <h3 className="text-xl font-semibold text-red-700">Personal Narrative</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4" data-testid="about-personal">
                My journey began in risk analysis at Amazon India, where I developed a sharp eye for spotting opportunities and mitigating challenges. Moving into strategy and growth roles at DoorDash and Voly, I honed my ability to drive meaningful change in fast-paced environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, as a Program Manager at Amazon Australia, I lead complex initiatives that scale networks, optimize acquisition strategies, and implement AI-driven automation. I'm passionate about ethical AI adoption and building solutions that empower people.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/50 hover:shadow-lg transition-all duration-300 group">
                <IconComponent className={`h-5 w-5 mr-2 ${achievement.color} enhanced-icon group-hover:animate-pulse`} />
                <span className="text-sm font-medium text-gray-700">{achievement.text}</span>
              </div>
            );
          })}
        </div>

        {/* Career Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Career Journey</h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative text-center group">
                  <div className={`hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                  <Card className="bg-white/90 backdrop-blur-sm shadow-md border border-white/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-gray-800 mb-1">{item.year}</div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">{item.company}</div>
                      <div className="text-xs text-muted-foreground">{item.role}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-4 space-x-6">
              <div className="flex items-center">
                <Bike className="h-6 w-6 text-orange-600 mr-2 enhanced-icon glow-icon" />
                <span className="text-orange-700 font-medium">Motorbike Rides</span>
              </div>
              <div className="flex items-center">
                <Coffee className="h-6 w-6 text-amber-700 mr-2 enhanced-icon glow-icon" />
                <span className="text-amber-800 font-medium">Coffee Explorer</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Outside work, you'll often find me on a motorbike ride or exploring new coffee spots — two passions that keep me balanced and inspired. Feel free to reach out if you want to connect, collaborate, or talk about technology, AI, or coffee.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
