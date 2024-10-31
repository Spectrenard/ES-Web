import Marquee from "./ui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Raphael Fernandez",
    content:
      "J'ai fait appel à ES Web pour la création de mon site e-commerce, le résultat dépasse mes attentes, la communication et le design sont au top, Je recommande vivement !",
    company: "Client e-commerce",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Antoine Mancini",
    content:
      "Super accueil ! La personne qui s'est occupée de moi a bien compris ma demande et ce que j'attendais, tout devient simple lorsqu'on s'adresse a de vrais professionnels. J'ai eu de très bon conseils sur la mise en avant de mon site.",
    company: "Client satisfait",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Souad B",
    content:
      "Ravie d'avoir pu travailler avec ES Web, il a su créer un site web qui répond à mes attentes sans difficulté, il m'a tout expliqué de A à Z, je le remercie pour sa patience et son professionnalisme !",
    company: "Cliente web",
    avatar: "/avatars/avatar-6.png",
  },
  {
    name: "Malik Bourassi",
    content:
      "Vous avez transformé mon vieux site en quelque chose de moderne et attrayant. L'équipe a été réactive et attentionnée. Je suis très heureux du résultat. Merci ES Web !",
    company: "Client refonte",
    avatar: "/avatars/avatar-4.png",
  },
  {
    name: "Matheo Ribe",
    content:
      "Super expérience avec ES Web. Mon site web est maintenant élégant et fonctionnel. L'équipe a été patiente et attentionnée. Merci !",
    company: "Client web",
    avatar: "/avatars/avatar-5.png",
  },
  {
    name: "Alexis",
    content:
      "Excellente écoute et une bonne communication, je suis ravie d'avoir confier mon projet de création de site web à l'agence ES Web. Je recommande vivement !",
    company: "Client web",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Livio C",
    content:
      "J'ai rencontré ES Web car je cherchais à créer un site vitrine pour mon entreprise de toiture. Au bout de seulement quelques jours, j'ai commencé à avoir des appels pour des chantiers et après seulement 1 mois, je suis débordé et toujours très demandé.",
    company: "Entreprise de toiture",
    avatar: "/avatars/avatar-7.png",
  },
];

export default function Reviews() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/4 
          w-[800px] h-[600px] 
          bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent 
          blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 
            bg-gradient-to-r from-purple-500/10 to-purple-500/20 
            rounded-full border border-purple-500/20"
          >
            <span className="block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-purple-400 text-sm font-medium">
              Avis vérifiés Google
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-semibold mb-8 
            bg-gradient-to-r from-white via-white to-purple-200 
            bg-clip-text text-transparent"
          >
            La voix de nos clients
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-between items-center max-w-xl mx-auto mb-12 
            p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <Image
                  src="/assets/google.png"
                  alt="Google Reviews"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-stone-200 font-medium">Note Google</div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-stone-400 text-sm">(5/5)</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-stone-400 text-sm">de satisfaction</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Des retours authentiques de clients qui témoignent de leur
            expérience avec notre agence. Chaque avis reflète notre engagement
            envers l'excellence et la satisfaction client.
          </motion.p>
        </div>

        <div>
          <Marquee className="py-4" pauseOnHover>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="mx-4 p-6 relative
                  bg-gradient-to-br from-slate-800/50 to-slate-900/50
                  backdrop-blur-sm rounded-2xl w-[450px]
                  border border-slate-700/50
                  hover:border-purple-500/30 transition-all duration-500
                  hover:shadow-xl hover:shadow-purple-500/5
                  group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-purple-500/20">
                      <Image
                        src={review.avatar}
                        alt={`Avatar de ${review.name}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-purple-400 font-medium text-sm">
                        {review.name}
                      </p>
                      <p className="text-stone-500 text-xs">{review.company}</p>
                    </div>
                  </div>

                  <svg
                    className="w-8 h-8 text-purple-500/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-stone-300 text-sm ">{review.content}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
