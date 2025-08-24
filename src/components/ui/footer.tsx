import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import awwLogo from "@/assets/aww-logo.png";

const socialLinks = [
  { name: "Facebook", href: "https://m.facebook.com/afrowomenworkshops/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/afrowomenworkshops/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/afrowomenworkshops/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/afrowomenwork", icon: Twitter },
];

const quickLinks = [
  { name: "Qui Sommes-nous", href: "/qui-sommes-nous" },
  { name: "Nos Programmes", href: "/nos-programmes" },
  { name: "Nos Piliers d'actions", href: "/nos-piliers" },
  { name: "Pourquoi AWW", href: "/pourquoi-aww" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={awwLogo} 
                alt="AWW Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-xl font-playfair font-semibold">
                Afro Women Workshops
              </h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Unies par la solidarité, propulsées par l'innovation. 
              Ensemble, nous transformons les défis en opportunités.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:info@afrowomenworkshops.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@afrowomenworkshops.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Afrique & Caraïbes</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Afro Women Workshops. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}