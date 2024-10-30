"use client";
import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/public/assets/svg/logoipsum-287.svg";
import Button2 from "./ui/Button2";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[100%] max-w-7xl z-50">
      <nav className="w-full px-6 py-4 backdrop-blur-md bg-gray-900/45 border rounded-full border-white/10 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[180px] flex items-center">
            <button
              onClick={() => scrollToSection("header")}
              className="text-white flex items-center"
            >
              <Image
                src={LogoSvg}
                alt="ES Web Logo"
                width={120}
                height={40}
                className="w-auto h-8"
                style={{ display: "block" }}
              />
            </button>
          </div>

          {/* Liens centrés */}
          <div className="flex-1 hidden md:flex justify-center items-center gap-12 mx-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("processus")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              Processus
            </button>
          </div>

          {/* Bouton avec largeur fixe */}
          <div className="w-[180px] flex justify-end">
            <Button2 text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
}
