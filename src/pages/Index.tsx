import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Lightbulb, Heart } from "lucide-react";
import heroImage from "@/assets/hero-women.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Formation & Mentorat",
    description: "Programmes complets pour développer vos compétences entrepreneuriales et bénéficier d'un accompagnement personnalisé."
  },
  {
    icon: Users,
    title: "Communauté Solidaire", 
    description: "Rejoignez le Club des Shepreneures, une communauté bienveillante pour apprendre, partager et grandir ensemble."
  },
  {
    icon: Lightbulb,
    title: "Innovation Durable",
    description: "Intégrez les principes du développement durable dans vos projets entrepreneuriaux pour un impact positif."
  }
];

const stats = [
  { number: "500+", label: "Femmes formées" },
  { number: "150+", label: "Entreprises créées" },
  { number: "12", label: "Pays couverts" },
  { number: "25+", label: "Partenaires" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-empowerment/10 to-solidarity/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="heading-xl text-primary">
                    Afro Women Workshops
                  </h1>
                  <p className="text-2xl font-playfair text-solidarity font-medium">
                    Unies par la solidarité, propulsées par l'innovation
                  </p>
                  <p className="body-lg text-muted-foreground max-w-lg">
                    Organisation pionnière dédiée à l'autonomisation des femmes entrepreneures 
                    et créatives d'Afrique et des Caraïbes. Ensemble, nous transformons les 
                    défis en opportunités.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="btn-empowerment">
                    <Link to="/nous-rejoindre">
                      Rejoindre le mouvement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/qui-sommes-nous">
                      Découvrir AWW
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Femmes entrepreneures africaines et caribéennes collaborant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="heading-lg text-primary mb-6">
                  Nos Services d'Excellence
                </h2>
                <p className="body-base text-muted-foreground max-w-3xl mx-auto">
                  Découvrez comment AWW accompagne les femmes entrepreneures à chaque étape 
                  de leur parcours professionnel et personnel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="card-hover border-0 shadow-lg text-center">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center mb-6">
                          <Icon className="h-8 w-8 text-empowerment" />
                        </div>
                        <h3 className="text-xl font-playfair font-medium text-primary mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="heading-lg text-primary mb-6">
                  Notre Impact en Chiffres
                </h2>
                <p className="body-base text-muted-foreground">
                  Des résultats concrets qui témoignent de notre engagement pour l'empowerment féminin.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-empowerment mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8">
                <Heart className="h-10 w-10 text-empowerment" />
              </div>
              <h2 className="heading-md text-primary mb-6">
                Prête à transformer vos défis en opportunités ?
              </h2>
              <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez une communauté de femmes ambitieuses qui créent un impact positif 
                dans leurs communautés tout en développant des entreprises durables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-empowerment">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxNawqwYX0E3shVcg_41-SplKCX5WLgC5G8O1q0gCiE7JZCQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rejoindre maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/nos-programmes">
                    Découvrir nos programmes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
