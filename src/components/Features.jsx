import { Hammer, Ruler, Leaf, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Traditionelles Handwerk",
    desc: "Sorgfältige Verarbeitung, präzise Verbindungen und langlebige Qualität."
  },
  {
    icon: Ruler,
    title: "Individuelle Planung",
    desc: "Maßgeschneiderte Lösungen, die perfekt zu Ihrem Raum und Stil passen."
  },
  {
    icon: Leaf,
    title: "Nachhaltige Materialien",
    desc: "Hochwertige Massivhölzer aus verantwortungsvoller Forstwirtschaft."
  },
  {
    icon: BadgeCheck,
    title: "Verlässlich & termintreu",
    desc: "Transparente Kommunikation und pünktliche Umsetzung."
  }
];

export default function Features() {
  return (
    <section id="leistungen" className="bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Unsere Schwerpunkte</h2>
          <p className="mt-3 text-stone-700">Von der ersten Skizze bis zur Montage – alles aus einer Hand.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white p-6 ring-1 ring-stone-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-600/10 text-amber-700 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{title}</h3>
              <p className="mt-2 text-stone-700 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
