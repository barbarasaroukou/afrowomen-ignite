import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import founder1 from "@/assets/fondatrices.jpg";
import team2 from "@/assets/angelique.jpg";
import team3 from "@/assets/alice.jpg";
import team4 from "@/assets/mariama.jpg";

const founderData = {
  id: "fondatrices",
  name: "Fondatrice Principale",
  role: "CEO & Fondatrice",
  image: founder1,
  description: "Chez Afro Women Workshops (AWW), nous croyons que l'impact commence par le leadership. Notre équipe fondatrice est composée de femmes afrodescendantes aux parcours diversifiés mais unies par une même vision : celle d'un monde où les femmes africaines et caribéennes peuvent réaliser leur plein potentiel entrepreneurial et créatif.",
  fullBio: "Une leader visionnaire avec plus de 15 ans d'expérience dans l'entrepreneuriat social et le développement durable. Passionnée par l'empowerment des femmes et l'innovation inclusive."
};

const teamMembers = [
  {
    id: "team-2",
    name: "Angélique Marguerite Berthe Diène",
    role: "Instigatrice et Directrice générale",
    image: team2,
    description: "Entrepreneure sociale et militante engagée, Angélique œuvre pour l’autonomisation des femmes à travers l’entrepreneuriat, l’éducation et la culture. ",
    fullBio: "Entrepreneure sociale et militante engagée, Angélique œuvre pour l’autonomisation des femmes à travers l’entrepreneuriat, l’éducation et la culture. Forte d’une expertise en gestion, comptabilité et management acquise entre le Sénégal, la France et le Canada, elle a évolué au sein d’entreprises et d’organisations internationales avant de se consacrer à l’impact social. En 2015, elle fonde Afro Women Workshops (AWW) pour accompagner les femmes entrepreneures issues des communautés africaines et caribéennes. Elle est également à l’origine d’initiatives telles que R Magazine, Vilicatio, Domaine Diène ou encore le festival Terracott’Art, alliant développement durable, culture et entrepreneuriat.Sa vision : bâtir un écosystème inclusif où les femmes afrodescendantes peuvent innover et transformer le monde.."
  },
  {
    id: "team-3", 
    name: "Alice Niang",
    role: "Co-fondatrice et Administratrice",
    image: team3,
    description: "Juriste passionnée, Alice Niang est une professionnelle polyvalente et rigoureuse.",
    fullBio: "Juriste passionnée, Alice Niang est une professionnelle polyvalente et rigoureuse. Elle a mis son expertise en droit et en gestion administrative au service de l’impact social, après une carrière entre la France, le Canada et le Sénégal. Co-fondatrice d’AWW, elle joue un rôle clé dans la structuration de l’organisation, le service à la clientèle et la gestion des opérations. Son engagement profond pour l'autonomisation des femmes et son expertise font d'elle une actrice essentielle du changement."
  },
  {
    id: "team-4",
    name: "Mariama Dabo", 
    role: "Co-fondatrice et Administratrice",
    image: team4,
    description: "Connue également sous le nom d’Émeraude, Mariama est une entrepreneure visionnaire au parcours riche : animatrice radio, présentatrice télé, mannequin international, photographe, promotrice artisanale et gestionnaire d’entreprise.",
    fullBio: "Connue également sous le nom d’Émeraude, Mariama est une entrepreneure visionnaire au parcours riche : animatrice radio, présentatrice télé, mannequin international, photographe, promotrice artisanale et gestionnaire d’entreprise. Depuis son arrivée au Canada, elle a fondé une garderie et développe des projets de valorisation des produits de sa région natale, la Casamance. Au sein d’AWW, elle encourage la solidarité plutôt que la compétition, et insuffle un esprit de sororité entrepreneuriale."
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