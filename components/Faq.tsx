import AccordionExample from "./ui/Accordion";
import { motion } from "framer-motion";
import AnimatedShinyText from "./ui/animated-shiny-text";

export default function Faq() {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      {/* Spotlight pour la section FAQ */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/4
          w-[900px] h-[500px] 
          bg-gradient-to-b from-purple-500/20 via-purple-300/15 to-transparent 
          blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* En-tête de la section */}
        <div className="text-center mb-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10"
          >
            <AnimatedShinyText>Questions Fréquentes</AnimatedShinyText>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-semibold text-stone-100 font-instrument"
          >
            Tout ce que vous devez savoir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-stone-400 max-w-2xl mx-auto"
          >
            Découvrez les réponses aux questions les plus courantes sur nos
            services et notre façon de travailler
          </motion.p>
        </div>

        {/* Composant Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AccordionExample />
        </motion.div>
      </div>
    </section>
  );
}
