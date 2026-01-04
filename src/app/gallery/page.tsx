import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const galleryItems = [
  // --- Image 1: Row 1 & 2 ---
  { src: "/images/gallery/16.jpg", alt: "High-Rise Slab Leveling Survey", category: "Construction" },
  { src: "/images/gallery/1.webp", alt: "Residential Township Site Survey", category: "Planning" },
  { src: "/images/gallery/2.webp", alt: "Leica Total Station Site Setup", category: "Engineering" },
  { src: "/images/gallery/3.webp", alt: "Plinth Level Marking Coimbatore", category: "Construction" },
  
  // --- Image 1: Row 3 ---
  { src: "/images/gallery/4.webp", alt: "Foundation Layout Design Map", category: "Analysis" },
  { src: "/images/gallery/5.webp", alt: "Digital Stake-out Point Screen", category: "Technology" },
  { src: "/images/gallery/6.webp", alt: "Diamond City Excavation Verification", category: "Legal" },
  
  // --- Image 1 & 2: Row 4 & Transitions ---
  { src: "/images/gallery/7.webp", alt: "Flowserve Industrial Site Mapping", category: "Industrial" },
  { src: "/images/gallery/8.jpg", alt: "Precision Foundation Column Survey", category: "Construction" },
  { src: "/images/gallery/9.jpg", alt: "Leica TS System Site Calibration", category: "Technology" },
  
  // --- Image 2: Remaining Items ---
  { src: "/images/gallery/10.jpg", alt: "Building Boundary & Offset Survey", category: "Legal" },
  { src: "/images/gallery/11.jpg", alt: "Agricultural Land Boundary Marking", category: "Landowner" },
  { src: "/images/gallery/12.jpg", alt: "Coconut Grove Property Mapping", category: "Landowner" },
  { src: "/images/gallery/13.jpg", alt: "Leica TS10 Field Operation", category: "Engineering" },
  { src: "/images/gallery/14.jpg", alt: "Structural Column Marking", category: "Construction" },
  { src: "/images/gallery/15.jpg", alt: "Finished Plinth Level Survey Check", category: "Engineering" },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight">
              Project <span className="text-emerald-600">Archive</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              A curated collection of our survey operations, technical reporting, and on-field precision.
            </p>
          </div>
          
        </div>

        {/* Masonry Layout: Natural Flow */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className="relative group break-inside-avoid rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Container - Natural Height */}
              <div className="relative w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Minimalist Info Overlay (Only visible on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Footer CTA */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-4 p-2 pl-6 bg-slate-50 rounded-full border border-slate-100">
              <span className="text-sm font-bold text-slate-600">Ready to start your project?</span>
              <Link 
                href="/contact" 
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-emerald-600 transition-all shadow-lg"
              >
                Get in touch
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}