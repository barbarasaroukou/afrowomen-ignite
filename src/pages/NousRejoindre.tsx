import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ExternalLink, Send, Heart, Users } from "lucide-react";

export default function NousRejoindre() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-empowerment/5 to-solidarity/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl text-primary mb-6">
                Nous Rejoindre
              </h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Vous êtes une femme ambitieuse ou un(e) partenaire engagé(e) ? 
                Rejoignez notre réseau pour bénéficier de ressources, d'opportunités, 
                et contribuer à un avenir plus équitable.
              </p>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-empowerment/5 to-solidarity/5">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="h-10 w-10 text-empowerment" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Rejoindre le Mouvement AWW
                  </CardTitle>
                  <CardDescription className="body-base mt-4">
                    Faites partie d'une communauté de femmes entrepreneures déterminées 
                    à transformer les défis en opportunités. Ensemble, créons un impact positif 
                    durable dans nos communautés.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxNawqwYX0E3shVcg_41-SplKCX5WLgC5G8O1q0gCiE7JZCQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-empowerment text-empowerment-foreground font-medium rounded-lg hover:bg-empowerment-hover transition-colors text-lg"
                  >
                    <Users className="h-6 w-6 mr-3" />
                    Rejoindre le mouvement
                    <ExternalLink className="h-5 w-5 ml-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-20 bg-warm-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-md text-primary mb-6">
                  Nous Contacter
                </h2>
                <p className="body-base text-muted-foreground">
                  Pour toute question, partenariat ou demande d'information, 
                  contactez-nous via email{" "}
                  <a 
                    href="mailto:info@afrowomenworkshops.com"
                    className="text-empowerment hover:text-empowerment-hover underline"
                  >
                    info@afrowomenworkshops.com
                  </a>
                  {" "}ou via le formulaire ci-dessous.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair text-primary text-center">
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom et prénom"
                          className="border-muted-foreground/20 focus:border-empowerment"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre.email@exemple.com"
                          className="border-muted-foreground/20 focus:border-empowerment"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Parlez-nous de votre projet, vos questions ou comment vous souhaitez contribuer à notre mission..."
                        className="border-muted-foreground/20 focus:border-empowerment resize-none"
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-empowerment px-8 py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-3" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-md text-center text-primary mb-12">
                Pourquoi Nous Rejoindre ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="card-hover border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-lg font-playfair font-medium text-primary mb-3">
                      Communauté Solidaire
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rejoignez un réseau bienveillant de femmes entrepreneures 
                      qui se soutiennent mutuellement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-solidarity/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-lg font-playfair font-medium text-primary mb-3">
                      Formation Continue
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Accédez à des formations, ateliers et ressources 
                      pour développer vos compétences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-empowerment/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-lg font-playfair font-medium text-primary mb-3">
                      Impact Durable
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Participez à des projets qui créent un impact positif 
                      sur vos communautés.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}