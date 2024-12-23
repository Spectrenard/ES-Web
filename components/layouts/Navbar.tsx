"use client";
import Image from "next/image";
import LogoSvg from "@/public/assets/svg/logo.svg";
import Button2 from "../ui/Button2";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="w-full px-4 md:px-6 py-4 backdrop-blur-md bg-gray-900/45 border rounded-full border-white/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[140px] md:w-[180px] flex items-center">
            <button
              onClick={() => scrollToSection("header")}
              className="text-white flex items-center"
            >
              <Image
                src={LogoSvg}
                alt="Logo"
                width={120}
                height={40}
                className="w-auto h-8 md:h-10"
                style={{ display: "block" }}
              />
            </button>
          </div>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 p-4 md:hidden bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/10">
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  Projets
                </button>
                <button
                  onClick={() => scrollToSection("processus")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  Processus
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  F.A.Q
                </button>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="flex justify-center w-full"
                >
                  <Button2
                    text="Contactez-nous"
                    className="w-full max-w-[200px] flex justify-center items-center"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Menu desktop */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-12 mx-4">
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
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              F.A.Q
            </button>
          </div>

          {/* Bouton Contact (desktop) */}
          <div
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex justify-end"
          >
            <Button2 text="Contactez-nous" className="" />
          </div>
        </div>
      </nav>
    </div>
  );
}
