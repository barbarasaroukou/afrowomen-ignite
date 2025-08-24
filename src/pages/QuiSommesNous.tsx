import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import founder1 from "@/assets/founder-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const founderData = {
  id: "founder-1",
  name: "Fondatrice Principale",
  role: "CEO & Fondatrice",
  image: founder1,
  description: "Chez Afro Women Workshops (AWW), nous croyons que l'impact commence par le leadership. Notre équipe fondatrice est composée de femmes afrodescendantes aux parcours diversifiés mais unies par une même vision : celle d'un monde où les femmes africaines et caribéennes peuvent réaliser leur plein potentiel entrepreneurial et créatif.",
  fullBio: "Une leader visionnaire avec plus de 15 ans d'expérience dans l'entrepreneuriat social et le développement durable. Passionnée par l'empowerment des femmes et l'innovation inclusive."
};

const teamMembers = [
  {
    id: "team-2",
    name: "Dr. Marie Dubois",
    role: "Directrice des Programmes",
    image: team2,
    description: "Experte en développement durable et formation entrepreneuriale, Marie coordonne nos programmes de mentorat et ateliers.",
    fullBio: "Dr. Marie Dubois apporte son expertise de 12 ans dans le développement de programmes éducatifs innovants. Diplômée en sciences sociales, elle a accompagné plus de 500 femmes entrepreneures dans leur parcours professionnel à travers l'Afrique et les Caraïbes."
  },
  {
    id: "team-3", 
    name: "Sarah Johnson",
    role: "Responsable Partenariats",
    image: team3,
    description: "Spécialiste en développement de partenariats stratégiques et en mobilisation de ressources pour nos initiatives.",
    fullBio: "Sarah Johnson est une professionnelle chevronnée avec 10 ans d'expérience dans le développement de partenariats internationaux. Elle a travaillé avec des organisations prestigieuses et a levé plus de 2 millions d'euros pour des projets d'empowerment féminin."
  },
  {
    id: "team-4",
    name: "Aminata Traoré", 
    role: "Coordinatrice Bien-être",
    image: team2,
    description: "Psychologue et coach certifiée, Aminata développe nos programmes de bien-être et d'accompagnement personnel.",
    fullBio: "Aminata Traoré est psychologue clinicienne et coach certifiée en développement personnel. Elle se spécialise dans l'accompagnement des femmes entrepreneures et a développé des méthodes innovantes pour gérer le stress et développer la confiance en soi."
  }
];

export default function QuiSommesNous() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl text-primary mb-6">
                Qui Sommes-nous ?
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                AWW soutient les femmes ambitieuses grâce à des programmes de formation, 
                de mentorat, de bien-être et de mise en réseau. Nous intégrons les principes 
                du développement durable à toutes nos initiatives pour favoriser une croissance 
                inclusive et éthique.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-lg text-center text-primary mb-12">
                Présentation des fondatrices et de l'équipe clé
              </h2>
              
              {/* Founder Card */}
              <div className="mb-16">
                <TeamMemberCard member={founderData} isFounder={true} />
              </div>

              {/* Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-20 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-md text-primary mb-8">
                Nos Valeurs Fondamentales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-primary">
                    Solidarité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nous créons des liens durables entre femmes pour un soutien mutuel.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-solidarity/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-primary">
                    Innovation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nous développons des solutions créatives et durables.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-primary">
                    Durabilité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nous intégrons l'éthique environnementale à tous nos projets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}