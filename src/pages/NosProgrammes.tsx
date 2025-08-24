import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users2, Target, Sprout } from "lucide-react";

const programmes = [
  {
    id: "ateliers-formation",
    title: "Ateliers de formation",
    description: "Des sessions interactives sur la création d'entreprise, la gestion financière, le marketing digital, et bien plus encore.",
    icon: Briefcase,
    features: [
      "Création et développement d'entreprise",
      "Gestion financière et comptabilité",
      "Marketing digital et réseaux sociaux",
      "Leadership et communication",
      "Stratégie commerciale et vente"
    ]
  },
  {
    id: "programmes-mentorat",
    title: "Programmes de mentorat",
    description: "Un accompagnement personnalisé avec des expertes pour aider chaque femme à relever ses défis professionnels.",
    icon: Users2,
    features: [
      "Mentorat individuel avec des expertes",
      "Suivi personnalisé sur 6 mois",
      "Séances de groupe mensuelles",
      "Accès à un réseau d'entrepreneures",
      "Plans d'action personnalisés"
    ]
  },
  {
    id: "club-shepreneures",
    title: "Club des Shepreneures",
    description: "Une communauté solidaire pour apprendre, partager et grandir ensemble dans un environnement bienveillant.",
    icon: Target,
    features: [
      "Communauté exclusive de femmes entrepreneures",
      "Événements de networking mensuels",
      "Partage d'expériences et bonnes pratiques",
      "Opportunités de collaboration",
      "Support émotionnel et professionnel"
    ]
  },
  {
    id: "innovation-durable",
    title: "Innovation & Développement Durable",
    description: "Programmes spécialisés intégrant les principes du développement durable dans l'entrepreneuriat.",
    icon: Sprout,
    features: [
      "Entrepreneuriat social et environnemental",
      "Économie circulaire et éco-innovation",
      "Technologies vertes et durables",
      "Impact social et mesure de performance",
      "Certification et labellisation durable"
    ]
  }
];

export default function NosProgrammes() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl text-primary mb-6">
                Nos Programmes
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez nos programmes complets conçus pour accompagner les femmes 
                entrepreneures à chaque étape de leur parcours professionnel et personnel.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programmes.map((programme) => {
                  const Icon = programme.icon;
                  return (
                    <Card key={programme.id} className="card-hover border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 bg-empowerment/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-empowerment" />
                        </div>
                        <CardTitle className="text-2xl font-playfair text-primary">
                          {programme.title}
                        </CardTitle>
                        <CardDescription className="body-base">
                          {programme.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-medium text-primary">Inclut :</h4>
                          <ul className="space-y-2">
                            {programme.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full bg-solidarity mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-md text-primary mb-6">
                Prête à rejoindre nos programmes ?
              </h2>
              <p className="body-base text-muted-foreground mb-8">
                Que vous soyez au début de votre parcours entrepreneurial ou que vous 
                souhaitiez développer votre entreprise existante, nous avons le programme 
                qui vous convient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxNawqwYX0E3shVcg_41-SplKCX5WLgC5G8O1q0gCiE7JZCQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-empowerment text-empowerment-foreground font-medium rounded-lg hover:bg-empowerment-hover transition-colors"
                >
                  Rejoindre le mouvement
                </a>
                <a
                  href="/nous-rejoindre"
                  className="inline-flex items-center justify-center px-6 py-3 border border-empowerment text-empowerment font-medium rounded-lg hover:bg-empowerment/5 transition-colors"
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