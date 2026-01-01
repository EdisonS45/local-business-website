// src/app/gallery/page.tsx

export default function GalleryPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Project Gallery
        </h1>

        <p className="mt-4 text-slate-600">
          Real work snapshots will be displayed here.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder blocks */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-lg bg-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
