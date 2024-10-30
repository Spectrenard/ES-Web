"use client";
import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/public/assets/svg/logoipsum-287.svg";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[40%] max-w-7xl z-50">
      <nav className="w-full px-6 py-4 backdrop-blur-md bg-gray-900/45 border border-white/10 rounded-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white">
            <Image
              src={LogoSvg}
              alt="ES Web Logo"
              width={120}
              height={40}
              className="w-auto h-8"
            />
          </Link>

          {/* Liens centrés */}
          <div className="flex-1 hidden md:flex justify-center items-center gap-8">
            <Link
              href="#pricing"
              className="text-gray-100 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#about"
              className="text-gray-100 hover:text-white transition-colors"
            >
              À propos
            </Link>
            <Link
              href="#faq"
              className="text-gray-100 hover:text-white transition-colors"
            >
              F.A.Q
            </Link>
          </div>

          {/* Espace pour équilibrer la flexbox */}
          <div className="w-24" />
        </div>
      </nav>
    </div>
  );
}
