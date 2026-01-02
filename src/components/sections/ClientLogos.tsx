import Image from "next/image";

const clients = [
  "/images/clients/client1.svg",
  "/images/clients/client2.svg",
  "/images/clients/client3.png",
  "/images/clients/client4.webp",
  "/images/clients/client5.png",
];

export default function ClientLogos() {
  return (
    <section className="bg-background border-y border-border">
      <div className="container py-14">
        <p className="text-center text-sm text-muted mb-8">
          Trusted by companies, developers, and institutions
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {clients.map((logo, idx) => (
            <div
              key={idx}
              className="relative h-10 w-32 opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
