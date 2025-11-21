export default function About() {
  return (
    <section id="ueber-uns" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Familiengeführt seit über 20 Jahren</h2>
          <p className="mt-4 text-stone-700 leading-relaxed">
            Als Schreinerei aus der Region verbinden wir traditionelles Handwerk mit modernen Fertigungstechniken. Unser Anspruch: Möbel, die Generationen überdauern – ehrlich, hochwertig und individuell geplant.
          </p>
          <ul className="mt-6 space-y-3 text-stone-700">
            <li>• Persönliche Beratung und detaillierte Planung</li>
            <li>• Eigene Werkstatt mit CNC und moderner Kantenbearbeitung</li>
            <li>• Geölte, gewachste oder lackierte Oberflächen – ganz nach Wunsch</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl object-cover h-48 sm:h-56 w-full" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" alt="Werkstatt" />
          <img className="rounded-xl object-cover h-48 sm:h-56 w-full" src="https://images.unsplash.com/photo-1515446134809-993c501ca304?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb2x6fGVufDB8MHx8fDE3NjM3MTA2Njl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Holz" />
          <img className="rounded-xl object-cover h-48 sm:h-56 w-full" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" alt="Handwerk" />
          <img className="rounded-xl object-cover h-48 sm:h-56 w-full" src="https://images.unsplash.com/photo-1567711963206-874372d2f49d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXRhaWxzfGVufDB8MHx8fDE3NjM3MTA2NzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Details" />
        </div>
      </div>
    </section>
  );
}
