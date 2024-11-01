import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Personal portfolio",
    description:
      "Un portfolio moderne et minimaliste présentant des projets et compétences en développement web",
    image: "/projects/spectre.png",
    tags: ["NextJS", "Tailwind"],
    link: "https://elyesasahin.vercel.app/",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description:
      "Une boutique en ligne complète pour Atelier Magnolia, avec gestion des produits, panier d'achat et système de paiement sécurisé",
    image: "/projects/ateliermagnolia.png",
    tags: ["Wordpress", "WooCommerce"],
    link: "https://ateliermagnolia.fr/",
    featured: false,
  },
  {
    title: "Landing page",
    description:
      "Une landing page élégante et responsive pour un restaurant, mettant en valeur le menu et l'ambiance du lieu",
    image: "/projects/resto.png",
    tags: ["Design", "Intégration", "Sass"],
    link: "https://spectrenard.github.io/Resto-LP/",
    featured: false,
  },

  // Ajoutez d'autres projets...
];

export default function Projects() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-2 md:gap-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300 flex-grow" />
            <h2 className="text-2xl md:text-4xl font-instrument text-gray-90 font-bold">
              Nos réalisations
            </h2>
            <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-300 flex-grow" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 
                shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                ${project.featured ? "md:col-span-2" : ""}`}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full transform transition-transform duration-500"
              >
                <div className="aspect-[16/12] md:aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 p-4 md:p-8 w-full transform transition-all duration-500 ease-out">
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm bg-white/10 
                        backdrop-blur-md rounded-full text-white border border-white/10 shadow-sm 
                        transform transition-all duration-300 group-hover:bg-white/20 
                        group-hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 
                    transform transition-all duration-300 group-hover:translate-x-2"
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-white/90 text-sm md:text-base leading-relaxed
                    transform transition-all duration-300 group-hover:translate-x-2
                    line-clamp-3 md:line-clamp-none"
                  >
                    {project.description}
                  </p>

                  <div
                    className="mt-4 md:mt-6 flex items-center text-white gap-2 md:gap-3 
                    opacity-0 transform translate-y-4 transition-all duration-300 
                    group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    <span className="text-sm md:text-base font-medium">
                      Voir le projet
                    </span>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 
                      group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
