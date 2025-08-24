import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, Sprout } from "lucide-react";

const defis = [
  {
    title: "Manque de ressources",
    description: "Accès limité au financement, aux formations et aux infrastructures nécessaires pour développer leur entreprise."
  },
  {
    title: "Stéréotypes de genre", 
    description: "Préjugés culturels et sociaux qui limitent les opportunités et la reconnaissance des femmes entrepreneures."
  },
  {
    title: "Accès limité au financement",
    description: "Difficultés à obtenir des prêts, investissements et autres formes de soutien financier pour leurs projets."
  },
  {
    title: "Manque de réseaux professionnels",
    description: "Accès restreint aux communautés d'affaires et aux opportunités de networking essentielles à la croissance."
  }
];

const solutions = [
  {
    id: "club-shepreneures",
    title: "Le Club des Shepreneures",
    description: "Une communauté solidaire pour apprendre, partager et grandir dans un environnement bienveillant.",
    icon: Users,
    features: [
      "Networking entre femmes entrepreneures",
      "Sessions de mentorat de groupe",
      "Partage d'expériences et bonnes pratiques",
      "Support émotionnel et professionnel"
    ]
  },
  {
    id: "projets-entrepreneuriaux",
    title: "Lancement de projets entrepreneuriaux concrets",
    description: "Accompagnement complet depuis l'idée jusqu'à la mise en œuvre de projets d'entreprise.",
    icon: TrendingUp,
    features: [
      "Formation à la création d'entreprise",
      "Accompagnement personnalisé",
      "Accès à des opportunités de financement",
      "Suivi post-création"
    ]
  },
  {
    id: "bibliotheques-vertes",
    title: "Création de bibliothèques vertes et jardins éducatifs",
    description: "Développement d'espaces durables pour l'éducation et la sensibilisation environnementale.",
    icon: Sprout,
    features: [
      "Espaces d'apprentissage écologiques",
      "Formation aux pratiques durables",
      "Projets communautaires",
      "Sensibilisation environnementale"
    ]
  }
];

const impact = [
  { label: "Femmes formées", value: "500+", description: "Bénéficiaires de nos programmes" },
  { label: "Entreprises créées", value: "150+", description: "Projets entrepreneuriaux lancés" },
  { label: "Pays couverts", value: "12", description: "En Afrique et dans les Caraïbes" },
  { label: "Partenaires", value: "25+", description: "Organisations collaboratrices" }
];

export default function PourquoiAWW() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl text-primary mb-6">
                Pourquoi AWW ?
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                De nombreuses femmes font face à des obstacles systémiques qui limitent leur potentiel entrepreneurial. 
                AWW agit concrètement pour lever ces barrières et créer un écosystème de soutien inclusif.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-md text-center text-primary mb-12">
                Les Défis que Nous Adressons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {defis.map((defi, index) => (
                  <Card key={index} className="border-l-4 border-l-empowerment shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-playfair font-medium text-primary mb-3">
                        {defi.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {defi.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 lg:py-20 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-md text-center text-primary mb-12">
                Nos Solutions Concrètes
              </h2>
              <div className="space-y-8">
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Card key={solution.id} className="card-hover border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-solidarity/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-8 w-8 text-solidarity" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-playfair text-primary">
                              {solution.title}
                            </CardTitle>
                            <CardDescription className="body-base mt-2">
                              {solution.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-20">
                          {solution.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full bg-empowerment mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-md text-center text-primary mb-12">
                Notre Impact en Chiffres
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impact.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-empowerment/10 to-solidarity/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-empowerment">
                        {stat.value}
                      </span>
                    </div>
                    <h3 className="text-lg font-playfair font-medium text-primary mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-md text-primary mb-6">
                Rejoignez le Mouvement
              </h2>
              <p className="body-base text-muted-foreground mb-8">
                Ensemble, nous pouvons transformer les défis en opportunités et créer 
                un avenir plus équitable pour toutes les femmes entrepreneures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxNawqwYX0E3shVcg_41-SplKCX5WLgC5G8O1q0gCiE7JZCQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-empowerment text-empowerment-foreground font-medium rounded-lg hover:bg-empowerment-hover transition-colors"
                >
                  Rejoindre maintenant
                </a>
                <a
                  href="/nous-rejoindre"
                  className="inline-flex items-center justify-center px-8 py-3 border border-empowerment text-empowerment font-medium rounded-lg hover:bg-empowerment/5 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}