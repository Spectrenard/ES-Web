import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      text: "contact@esdev.fr",
      href: "mailto:contact@esdev.fr",
    },
    {
      icon: <Phone className="w-4 h-4 text-purple-400" />,
      text: "+33 6 XX XX XX XX",
      href: "tel:+33600000000",
    },
    {
      icon: <MapPin className="w-4 h-4 text-purple-400" />,
      text: "Paris, France",
      href: "#",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="bg-gray-950/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Section principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
            {/* Logo et description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="font-instrument text-2xl text-stone-200">
                ES Web
              </span>
              <p className="text-stone-400 text-sm leading-relaxed">
                Création de sites web modernes et performants. Solutions sur
                mesure pour votre présence en ligne.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-stone-400 hover:text-purple-400 transition-colors"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-stone-200 font-semibold">Navigation</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#services"
                  className="text-stone-400 hover:text-purple-400 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  className="text-stone-400 hover:text-purple-400 transition-colors"
                >
                  Projets
                </Link>
                <Link
                  href="#processus"
                  className="text-stone-400 hover:text-purple-400 transition-colors"
                >
                  Processus
                </Link>
                <Link
                  href="#faq"
                  className="text-stone-400 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-stone-200 font-semibold">Contact</h3>
              <div className="flex flex-col gap-3">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    className="flex items-center gap-2 text-stone-400 hover:text-purple-400 transition-colors"
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-stone-200 font-semibold">Newsletter</h3>
              <p className="text-stone-400 text-sm">
                Restez informé de nos dernières actualités et offres.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 w-full"
                />
                <button className="bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-lg transition-colors">
                  →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 py-6 text-center text-stone-500 text-sm">
            © {currentYear} ES Web. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
