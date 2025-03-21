import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  // États pour gérer le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envoi du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Envoi au service Formspree - REMPLACEZ VOTRE_FORM_ID par l'ID fourni par Formspree
      const response = await fetch("https://formspree.io/f/myzeekdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Réinitialiser le statut après 5 secondes
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setStatus("error");

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <div
          className={`inline-block px-4 py-1 bg-sky-100 rounded-full border border-sky-200 mb-6
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="text-sky-700 text-sm font-medium">
            Discutons de votre projet
          </span>
        </div>

        <h2
          className={`text-3xl md:text-5xl font-semibold mb-4 md:mb-6 text-slate-800 font-syne
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Transformez votre <span className="text-sky-600">vision</span> en
          réalité
        </h2>

        <p
          className={`text-slate-600 mb-8 md:mb-12 text-base md:text-lg
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Nous créons des sites web performants qui convertissent vos visiteurs
          en clients. Un message, et votre projet prend vie.
        </p>

        {/* Formulaire de contact élégant */}
        <div
          className={`max-w-3xl mx-auto opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <form
            className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg shadow-sky-100/30"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-sm text-left text-slate-700 mb-2 transition-transform group-focus-within:-translate-y-1 group-focus-within:text-sky-600">
                  Votre nom *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 transition-all"
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm text-left text-slate-700 mb-2 transition-transform group-focus-within:-translate-y-1 group-focus-within:text-sky-600">
                  Votre email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 transition-all"
                  placeholder="email@exemple.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6 group">
              <label className="block text-sm text-left text-slate-700 mb-2 transition-transform group-focus-within:-translate-y-1 group-focus-within:text-sky-600">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 transition-all"
                placeholder="Création d'un site e-commerce, refonte, etc."
              />
            </div>

            <div className="mb-8 group">
              <label className="block text-sm text-left text-slate-700 mb-2 transition-transform group-focus-within:-translate-y-1 group-focus-within:text-sky-600">
                Votre message *
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 transition-all resize-none"
                placeholder="Décrivez votre projet en quelques mots..."
                required
              ></textarea>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Message de statut */}
              <div className="text-left">
                {status === "success" && (
                  <p className="text-green-500 text-sm flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    Message envoyé avec succès!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                    Erreur d'envoi. Veuillez réessayer.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 rounded-lg text-white font-medium shadow-lg shadow-sky-200/30 hover:shadow-sky-200/50 hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 relative overflow-hidden ${
                  status === "loading" ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                <span className="relative z-10">
                  {status === "loading"
                    ? "Envoi en cours..."
                    : "Envoyez votre message"}
                </span>
                <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />

                {/* Effet brillant sur le bouton */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
              </button>
            </div>

            {/* Message de confiance */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Réponse en moins de 24h</span>
              </div>
              <span className="text-slate-400">•</span>
              <span>Confidentiel et sécurisé</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
