"use client";
import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/assets/svg/logoipsum-287.svg";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[60%] max-w-7xl z-50">
      <nav className="w-full px-6 py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white">
            <Image
              src={LogoSvg}
              alt="ES Web Logo"
              width={120}
              height={40}
              className="w-auto h-8"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 mx-auto">
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              À propos
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              F.A.Q
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
