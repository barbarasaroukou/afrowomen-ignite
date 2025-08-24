import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, GraduationCap, SearchCheck, Users2 } from "lucide-react";

const piliers = [
  {
    id: "developpement-durable",
    title: "Développement Durable",
    description: "Sensibiliser aux pratiques responsables, soutenir des entreprises éthiques et créer des opportunités durables.",
    icon: Leaf,
    color: "empowerment"
  },
  {
    id: "education-sensibilisation",
    title: "Éducation & Sensibilisation",
    description: "Valoriser l'entrepreneuriat féminin comme moteur de développement économique et social.",
    icon: GraduationCap,
    color: "solidarity"
  },
  {
    id: "recherche-developpement",
    title: "Recherche & Développement",
    description: "Analyser les besoins réels des femmes pour concevoir des programmes ciblés et innovants.",
    icon: SearchCheck,
    color: "empowerment"
  }
];

const publicCible = [
  {
    title: "Femmes entrepreneures africaines",
    description: "Accompagnement spécialisé pour les femmes créatrices d'entreprise sur le continent africain"
  },
  {
    title: "Femmes de la diaspora",
    description: "Support pour les femmes africaines et caribéennes vivant à l'international"
  },
  {
    title: "Communautés afro-descendantes",
    description: "Programmes adaptés aux spécificités culturelles et socio-économiques"
  },
  {
    title: "Jeunes en milieu scolaire",
    description: "Sensibilisation précoce à l'entrepreneuriat et aux valeurs du développement durable"
  }
];

export default function NosPiliers() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl text-primary mb-6">
                Nos Piliers d'Action
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez les fondements de notre approche intégrée pour l'empowerment 
                des femmes entrepreneures et le développement durable.
              </p>
            </div>
          </div>
        </section>

        {/* Piliers Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {piliers.map((pilier) => {
                  const Icon = pilier.icon;
                  return (
                    <Card key={pilier.id} className="card-hover border-0 shadow-lg text-center">
                      <CardHeader className="pb-4">
                        <div className={`w-20 h-20 mx-auto bg-${pilier.color}/10 rounded-full flex items-center justify-center mb-6`}>
                          <Icon className={`h-10 w-10 text-${pilier.color}`} />
                        </div>
                        <CardTitle className="text-xl font-playfair text-primary">
                          {pilier.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="body-base leading-relaxed">
                          {pilier.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Public Cible Section */}
        <section className="py-16 lg:py-20 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-primary mb-6">
                  Notre Public Cible
                </h2>
                <p className="body-base text-muted-foreground max-w-3xl mx-auto">
                  Nous nous engageons à accompagner diverse communautés de femmes dans leur parcours entrepreneurial, 
                  en adaptant nos programmes à leurs besoins spécifiques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publicCible.map((group, index) => (
                  <Card key={index} className="card-hover border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-solidarity/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Users2 className="h-6 w-6 text-solidarity" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-playfair font-medium text-primary mb-2">
                            {group.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {group.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-md text-primary mb-8">
                Notre Engagement
              </h2>
              <div className="bg-gradient-to-br from-empowerment/5 to-solidarity/5 rounded-2xl p-8 lg:p-12">
                <p className="body-lg text-primary leading-relaxed">
                  "Chez AWW, nous croyons fermement que l'entrepreneuriat féminin est un levier 
                  puissant pour le développement économique et social durable. Notre approche 
                  holistique intègre formation, mentorat, bien-être et impact environnemental 
                  pour créer un écosystème complet de soutien aux femmes ambitieuses."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}