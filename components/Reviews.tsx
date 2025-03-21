import Image from "next/image";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageSquare,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Reviews() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 
              rounded-full border border-sky-200 mb-6
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sky-700 text-sm font-medium">
              Ce que disent nos clients
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-semibold font-syne mb-8 md:mb-12
              text-slate-800
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            La satisfaction client <br className="hidden md:block" />
            au cœur de notre approche
          </h2>
        </div>

        {/* Widget SociableKit pour avis Google */}
        <div
          className={`relative max-w-5xl mx-auto opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {/* Badge Google */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20">
            <Image
              src="/assets/google.png"
              alt="Google Reviews"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="relative overflow-hidden mx-auto rounded-2xl bg-white border border-slate-200 shadow-md">
            {/* Conteneur pour le widget */}
            <div className="px-4 py-8 md:py-10">
              {/* Intégration iframe SociableKit */}
              <div className="relative pt-[400px] w-full">
                <iframe
                  src="https://widgets.sociablekit.com/google-reviews/iframe/25537069"
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full"
                  title="Avis Google"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
