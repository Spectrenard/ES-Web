import { motion } from "framer-motion";
import { StandaloneShineButton } from "./ui/cta";
import { ArrowRight, CalendarClock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-32 relative overflow-hidden">
      {/* Nouveaux spotlights avec des positions et formes différentes */}

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 bg-white/5 rounded-full border border-purple-500/20 mb-6
            backdrop-blur-sm"
        >
          <span className="text-purple-200/80 text-sm">
            Prêt à vous lancer?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold mb-6 text-stone-100 font-instrument"
        >
          Votre <span className="text-purple-300">site sur-mesure</span>, pour
          des résultats concrets
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-400 mb-12 text-lg"
        >
          De la création à la mise en ligne, on s'occupe de tout pour vous
          offrir un site qui attire et retient l’attention.
        </motion.p>

        <motion.div>
          {/* Card de contact */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="space-y-6 text-center">
                <h3 className="text-3xl text-stone-200 font-light">
                  Lancez votre projet web avec nous
                </h3>
                <div className="space-y-4">
                  <p className="text-stone-400 text-lg">
                    Que ce soit pour un site e-commerce, vitrine ou une app web,
                    on maîtrise les dernières technologies pour répondre à vos
                    besoins.
                  </p>
                  <div className="inline-flex items-center gap-3 text-purple-200/80">
                    <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Brief et devis en moins de 24h
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row-reverse gap-4 w-full justify-center">
                <a href="mailto:e.sahinnn61@gmail.com">
                  <StandaloneShineButton
                    icon={
                      <Mail className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    }
                  >
                    Détaillez votre besoin
                    <ArrowRight className="w-4 h-4" />
                  </StandaloneShineButton>
                </a>

                <a
                  href="https://calendly.com/votre-lien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="px-6 py-2.5 border border-white/10 rounded-lg text-stone-200/70 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                    flex items-center gap-2"
                  >
                    <CalendarClock className="w-4 h-4" />
                    <span>Planifiez une consultation</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
