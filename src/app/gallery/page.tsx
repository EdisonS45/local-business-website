import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  // Array of 15 items to demonstrate the varied layout
  const galleryItems = [
    { src: "/images/hero-surveyor4.jpg", alt: "On-site Precision Surveying", category: "Field Work" },
    { src: "/images/gallery/gallery1.webp", alt: "Boundary Verification", category: "Legal" },
    { src: "/images/gallery/gallery2.webp", alt: "Topographic Mapping", category: "Planning" },
    { src: "/images/gallery/gallery3.webp", alt: "Construction Staking", category: "Engineering" },
    { src: "/images/gallery/gallery4.webp", alt: "Drone Aerial Survey", category: "Technology" },
    { src: "/images/gallery/gallery5.webp", alt: "FMB Tracking", category: "Government" },
    { src: "/images/gallery/gallery6.webp", alt: "Digital Contour Maps", category: "Analysis" },
    { src: "/images/gallery/gallery7.webp", alt: "Large Scale Development", category: "Industrial" },
    { src: "/images/gallery/gallery8.webp", alt: "Village Map Study", category: "Records" },
    { src: "/images/gallery/gallery9.webp", alt: "GPS Base Station", category: "Precision" },
    { src: "/images/gallery/gallery10.webp", alt: "Infrastructure Layout", category: "Public Works" },
    { src: "/images/gallery/gallery11.webp", alt: "Residential Partition", category: "Landowner" },
    { src: "/images/gallery/gallery12.webp", alt: "Industrial Corridor", category: "Development" },
    { src: "/images/gallery/gallery13.webp", alt: "Hydraulic Survey", category: "Specialized" },
    { src: "/images/gallery/gallery14.webp", alt: "Final Approval Report", category: "Deliverable" },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
         
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 leading-[1.1]">
            Precision in <span className="text-emerald-600">Action</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From government-approved FMB tracking to advanced topographic mapping, explore how we deliver zero-friction spatial data.
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, i) => {
            // Logical layout: Every 5th item is large, 1st is wide, etc.
            const isLarge = i === 0 || i === 7; // Big square
            const isWide = i === 4 || i === 11; // Horizontal rectangle

            return (
              <div 
                key={i} 
                className={`group relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl 
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} 
                  ${isWide ? 'md:col-span-2' : ''}`}
              >
                {/* Image Logic */}
                <div className="relative w-full h-full bg-slate-50">
                  {item.src.includes("/") ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col items-center justify-center p-6 text-center">
                      <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-300">Image Asset {i + 1} Pending</span>
                    </div>
                  )}

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.alt}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 flex flex-col items-center border-t border-slate-100 pt-16">
          <p className="text-slate-500 font-medium mb-6">Need a similar precision survey for your site?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="px-8 py-4 rounded-full border-2 border-slate-900 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
              Detailed Case Studies
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-emerald-600 font-bold text-white hover:bg-emerald-700 transition-all">
              Book Site Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}