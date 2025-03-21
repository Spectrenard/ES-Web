import { StandaloneShineButton } from "./ui/cta";
import { ArrowRight } from "lucide-react";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Processus() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  const etapes = [
    {
      numero: "01",
      titre: "Découverte",
      description:
        "Échange pour comprendre vos objectifs et définir vos besoins",
      icon: "🤝",
      sousTitre: "Premier contact",
    },
    {
      numero: "02",
      titre: "Proposition",
      description:
        "Présentation détaillée de la solution, du budget et du planning prévisionnel",
      icon: "📝",
      sousTitre: "Plan d'action",
    },
    {
      numero: "03",
      titre: "Production",
      description:
        "Développement itératif avec points d'étape réguliers et validations",
      icon: "⚙️",
      sousTitre: "Développement",
    },
    {
      numero: "04",
      titre: "Livraison",
      description:
        "Mise en production et déploiement de votre projet après validation finale",
      icon: "🚀",
      sousTitre: "Final",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div
          className={`text-center space-y-4 mb-12 md:mb-16 opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-4 py-1 bg-sky-100 rounded-full text-sky-700 text-xs md:text-sm border border-sky-200">
              Notre méthode
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-800 font-syne">
            Notre Processus de
            <span className="text-sky-600"> Réalisation</span>
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto text-sm md:text-base">
            Une approche méthodique et transparente pour transformer votre
            vision en réalité
          </p>

          {/* Stats responsives */}
          <div
            className={`flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-8 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sky-800">
                10+
              </div>
              <div className="text-xs md:text-sm text-slate-500">
                Projets Réalisés
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sky-800">
                97%
              </div>
              <div className="text-xs md:text-sm text-slate-500">
                Clients Satisfaits
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sky-800">
                3-7
              </div>
              <div className="text-xs md:text-sm text-slate-500">
                Semaines en Moyenne
              </div>
            </div>
          </div>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {etapes.map((etape, index) => (
            <div
              key={etape.numero}
              className={`group relative opacity-0 ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div
                className="absolute z-[-1] inset-0 bg-gradient-to-b from-sky-100 to-transparent rounded-xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              />
              <div
                className="relative bg-white border border-slate-200 rounded-xl p-6 md:p-8
                transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md hover:shadow-sky-100/50"
              >
                <div className="text-3xl md:text-4xl mb-4">{etape.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-sky-600 text-2xl md:text-3xl font-bold">
                    {etape.numero}
                  </div>
                  <div className="h-1 w-8 md:w-12 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-slate-800">
                  {etape.titre}
                </h3>
                <div className="text-xs md:text-sm text-sky-600 mb-2">
                  {etape.sousTitre}
                </div>
                <p className="text-sm md:text-base text-slate-600">
                  {etape.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div
          className={`mt-12 md:mt-20 text-center opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
          style={{
            animationDelay: "0.8s",
            animationFillMode: "forwards",
          }}
        >
          <StandaloneShineButton
            onClick={() => scrollToSection("contact")}
            icon={
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            }
            className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            Démarrer votre projet
          </StandaloneShineButton>
        </div>
      </div>
    </section>
  );
}
