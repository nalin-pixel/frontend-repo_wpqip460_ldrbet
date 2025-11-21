import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Kontakt & Beratung</h2>
          <p className="mt-3 text-stone-700">Schildern Sie uns Ihr Projekt – wir melden uns innerhalb von 24 Stunden.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-stone-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-stone-700">Name</label>
                <input required className="mt-1 w-full rounded-md border-stone-300 focus:border-amber-600 focus:ring-amber-600" />
              </div>
              <div>
                <label className="text-sm text-stone-700">E-Mail</label>
                <input type="email" required className="mt-1 w-full rounded-md border-stone-300 focus:border-amber-600 focus:ring-amber-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-stone-700">Nachricht</label>
                <textarea rows={5} required className="mt-1 w-full rounded-md border-stone-300 focus:border-amber-600 focus:ring-amber-600" />
              </div>
            </div>
            <button className="mt-6 w-full sm:w-auto px-5 py-3 rounded-md bg-amber-700 text-white hover:bg-amber-800">Senden</button>
            {submitted && <p className="mt-3 text-green-700">Vielen Dank! Wir melden uns zeitnah.</p>}
          </form>

          <div className="rounded-2xl bg-amber-600/10 p-6 ring-1 ring-amber-700/20">
            <div className="space-y-3 text-stone-800">
              <p className="font-medium text-stone-900">Schreinerei Holzwerk Müller</p>
              <p>Beispielstraße 12
                <br/>12345 Musterstadt</p>
              <p>Tel. 01234 / 567890
                <br/>E-Mail: kontakt@holzwerk-mueller.de</p>
              <p>Öffnungszeiten: Mo–Fr 8–17 Uhr</p>
            </div>
            <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-stone-200 bg-white">
              <img src="https://images.unsplash.com/photo-1600480475217-0dd6f9831218?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYXJ0ZXxlbnwwfDB8fHwxNzYzNzEwNjcwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Karte" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
