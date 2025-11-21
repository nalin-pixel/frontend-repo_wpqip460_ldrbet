import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLink = "text-stone-700 hover:text-stone-900 transition-colors";

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 shadow-inner flex items-center justify-center text-white font-semibold">HM</div>
            <div className="leading-tight">
              <p className="font-semibold text-stone-900">Holzwerk Müller</p>
              <p className="text-xs text-stone-600">Schreinerei seit 2003</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className={navLink}>Leistungen</a>
            <a href="#projekte" className={navLink}>Projekte</a>
            <a href="#ueber-uns" className={navLink}>Über uns</a>
            <a href="#kontakt" className="px-4 py-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-colors">Kontakt</a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-stone-300 text-stone-700" onClick={() => setOpen(!open)} aria-label="Menü">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <a href="#leistungen" className={navLink} onClick={() => setOpen(false)}>Leistungen</a>
            <a href="#projekte" className={navLink} onClick={() => setOpen(false)}>Projekte</a>
            <a href="#ueber-uns" className={navLink} onClick={() => setOpen(false)}>Über uns</a>
            <a href="#kontakt" className="px-4 py-2 rounded-md bg-amber-700 text-white text-center" onClick={() => setOpen(false)}>Kontakt</a>
          </div>
        </div>
      )}
    </header>
  );
}
