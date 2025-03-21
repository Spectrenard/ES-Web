"use client";
import Image from "next/image";
import LogoSvg from "@/public/assets/svg/logo.svg";
import Button2 from "./ui/Button2";
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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50">
      <nav className="w-full px-3 md:px-4 py-3 backdrop-blur-md bg-white/90 border rounded-full border-slate-200 shadow-lg shadow-sky-100/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[140px] md:w-[160px] flex items-center">
            <button
              onClick={() => scrollToSection("header")}
              className="text-slate-800 flex items-center"
            >
              <Image
                src={LogoSvg}
                alt="Logo"
                width={100}
                height={30}
                className="w-auto h-8 md:h-10"
                style={{ display: "block" }}
              />
            </button>
          </div>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden text-slate-700 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-3 right-3 mt-1 p-3 md:hidden bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg">
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-700 hover:text-sky-600 transition-colors py-1 text-center"
                >
                  Services
                </button>

                <button
                  onClick={() => scrollToSection("processus")}
                  className="text-slate-700 hover:text-sky-600 transition-colors py-1 text-center"
                >
                  Processus
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-slate-700 hover:text-sky-600 transition-colors py-1 text-center"
                >
                  F.A.Q
                </button>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="flex justify-center w-full"
                >
                  <Button2
                    text="Contactez-nous"
                    className="w-full max-w-[180px] flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Menu desktop */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 mx-3">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("processus")}
              className="text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
            >
              F.A.Q
            </button>
          </div>

          {/* Bouton Contact (desktop) */}
          <div
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex justify-end"
          >
            <Button2
              text="Contactez-nous"
              className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
