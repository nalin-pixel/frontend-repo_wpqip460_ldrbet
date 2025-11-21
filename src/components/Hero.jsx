export default function Hero() {
  return (
    <section className="relative isolate bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-300/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
              Maßgefertigte Möbel aus Massivholz
            </h1>
            <p className="mt-5 text-lg text-stone-700">
              Wir planen und fertigen individuelle Einbauschränke, Küchen und Innenausbau – mit Liebe zum Detail und modernster Technik.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#kontakt" className="px-5 py-3 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-colors">Kostenlose Beratung</a>
              <a href="#projekte" className="px-5 py-3 rounded-full border border-stone-300 text-stone-800 hover:bg-white transition-colors">Unsere Arbeiten</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-stone-600">
              <div className="flex flex-col"><span className="text-stone-900 font-semibold">20+ Jahre</span><span>Erfahrung</span></div>
              <div className="flex flex-col"><span className="text-stone-900 font-semibold">Familienbetrieb</span><span>aus Deutschland</span></div>
              <div className="flex flex-col"><span className="text-stone-900 font-semibold">Massivholz</span><span>aus nachhaltiger Forstwirtschaft</span></div>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Holzwerkstatt" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/0 via-stone-950/0 to-stone-950/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
