import Image from "next/image";
import { cn } from "@/lib/utils";
import AirbnbLogo from "@/assets/svg/airbnb.png";
import AppleLogo from "@/assets/svg/apple.svg";
import DisneyLogo from "@/assets/svg/disney.svg";
import SamsungLogo from "@/assets/svg/samsung.svg";

const LOGOS = [
  { src: AirbnbLogo, alt: "Airbnb" },
  { src: AppleLogo, alt: "Apple" },
  { src: DisneyLogo, alt: "Disney" },
  { src: SamsungLogo, alt: "Samsung" },
] as const;

export default function InfiniteLogoCarousel() {
  const Marquee = () => (
    <div className="flex items-center py-12 gap-40">
      {LOGOS.map((logo, idx) => (
        <div key={idx} className="flex items-center justify-center w-40 h-20">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={80}
            className="w-full h-full object-contain brightness-0 invert opacity-50 hover:opacity-75 transition-opacity"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-hidden">
      <div className="animate-infinite-scroll">
        <Marquee />
      </div>
      <div className="animate-infinite-scroll" aria-hidden="true">
        <Marquee />
      </div>
    </div>
  );
}
