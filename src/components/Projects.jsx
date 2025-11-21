const projects = [
  {
    title: "Einbauküche in Eiche",
    desc: "Moderne Wohnküche mit massiven Fronten, grifflos und mit hochwertigen Beschlägen.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Garderobe in Nussbaum",
    desc: "Stauraumwunder mit geölter Oberfläche und durchlaufender Maserung.",
    image: "https://images.unsplash.com/photo-1701874520764-30c3e0d45555?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYXJkZXJvYmUlMjBpbiUyME51c3NiYXVtfGVufDB8MHx8fDE3NjM3MTA2Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
  },
  {
    title: "Einbauschrank unter Dachschräge",
    desc: "Perfekt angepasst mit cleveren Auszügen und integrierter Beleuchtung.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projekte" className="bg-gradient-to-b from-stone-50 to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Ausgewählte Projekte</h2>
          <p className="mt-3 text-stone-700">Ein Einblick in unsere Arbeit – funktional, zeitlos und aus bestem Holz.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="group rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <figcaption className="p-5">
                <h3 className="font-semibold text-stone-900">{p.title}</h3>
                <p className="mt-1 text-sm text-stone-700">{p.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
