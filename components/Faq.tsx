import AccordionExample from "./ui/Accordion";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { useInView } from "@/hooks/useInView";

export default function Faq() {
  const [sectionRef, isInView] = useInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-16 md:py-32 relative"
    >
      <div className="max-w-4xl mx-auto relative">
        {/* En-tête de la section */}
        <div className="text-center mb-8 space-y-4">
          <div
            className={`inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <AnimatedShinyText>Questions Fréquentes</AnimatedShinyText>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-semibold text-stone-100 font-instrument
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Tout ce que vous devez savoir
          </h2>

          <p
            className={`text-sm md:text-base text-stone-400 max-w-2xl mx-auto px-4 md:px-0
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Découvrez les réponses aux questions les plus courantes sur nos
            services et notre façon de travailler
          </p>
        </div>

        {/* Composant Accordion */}
        <div
          className={`opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <AccordionExample />
        </div>
      </div>
    </section>
  );
}
