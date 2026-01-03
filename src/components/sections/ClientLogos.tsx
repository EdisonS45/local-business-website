import Image from "next/image";

const clients = [
  "/images/clients/client1.svg",
  "/images/clients/client2.svg",
  "/images/clients/client3.png",
  "/images/clients/client4.webp",
  "/images/clients/client5.svg",
];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* The Moving Container */}
      <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused]">
        {/* Render logos multiple times for a seamless loop */}
        {[...clients, ...clients, ...clients].map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-12"
          >
            <div className="relative h-12 w-32 transition-transform duration-300 hover:scale-110">
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain"
                priority={idx < 10}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}