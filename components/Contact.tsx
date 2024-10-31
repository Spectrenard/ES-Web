import { motion } from "framer-motion";
import { StandaloneShineButton } from "./ui/cta";
import { ArrowRight } from "lucide-react";

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
            Réponse garantie sous 24h
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold mb-6 text-stone-100 font-instrument"
        >
          Transformez votre <span className="text-purple-300">vision</span> en
          réalité digitale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-400 mb-12 text-lg"
        >
          Notre équipe d'experts est prête à vous accompagner dans la
          réalisation de votre projet web
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-sm max-w-2xl mx-auto
            hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="space-y-6 text-center">
                <h3 className="text-2xl text-stone-200 font-medium">
                  Démarrons votre projet
                </h3>
                <div className="space-y-2">
                  <p className="text-stone-400">
                    Planifiez un appel découverte gratuit ou contactez-nous par
                    email
                  </p>
                  <p className="text-purple-200/80 font-medium">
                    Devis personnalisé sous 48h
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a
                  href="https://calendly.com/votre-lien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StandaloneShineButton>
                    <span className="flex items-center gap-2">
                      Planifier un appel
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </StandaloneShineButton>
                </a>

                <a href="mailto:e.sahinnn61@gmail.com">
                  <button
                    className="px-6 py-2.5 border border-white/10 rounded-lg text-stone-200 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                    flex items-center gap-2"
                  >
                    Envoyer un email
                    <ArrowRight className="w-4 h-4" />
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
