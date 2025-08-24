import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass, GraduationCap, Target, Award, UserPlus } from "lucide-react";
import { Button } from "./button";
import awwLogo from "@/assets/aww-logo.png";

const navigationItems = [
  { name: "Qui Sommes-nous", href: "/qui-sommes-nous", icon: Compass },
  { name: "Nos Programmes", href: "/nos-programmes", icon: GraduationCap },
  { name: "Nos Piliers d'actions", href: "/nos-piliers", icon: Target },
  { name: "Pourquoi AWW", href: "/pourquoi-aww", icon: Award },
  { name: "Nous Rejoindre", href: "/nous-rejoindre", icon: UserPlus },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={awwLogo} 
              alt="AWW Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-semibold text-primary">
                Afro Women Workshops
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-empowerment text-empowerment-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              asChild 
              variant="default" 
              className="btn-empowerment"
            >
              <Link to="/nous-rejoindre">
                Rejoindre le mouvement
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-empowerment text-empowerment-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button 
                  asChild 
                  variant="default" 
                  className="btn-empowerment w-full"
                >
                  <Link to="/nous-rejoindre" onClick={() => setIsOpen(false)}>
                    Rejoindre le mouvement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}