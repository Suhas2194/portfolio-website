import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(["home", "about", "experience", "projects", "skills", "education", "contact"]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3" data-testid="logo">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center enhanced-icon float-animation">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight gradient-text text-enhanced">
                  Suhas Bhushan
                </h1>
                <p className="text-xs text-muted-foreground">Program Manager</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors duration-200 hover:text-primary text-enhanced ${
                    activeSection === item.href.slice(1)
                      ? "text-foreground font-medium gradient-text"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-primary">Menu</h2>
                </div>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-2 py-2 rounded-md transition-colors duration-200 hover:bg-accent hover:text-primary ${
                        activeSection === item.href.slice(1)
                          ? "text-foreground font-medium bg-accent"
                          : "text-muted-foreground"
                      }`}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
