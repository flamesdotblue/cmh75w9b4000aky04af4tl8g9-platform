import { GraduationCap, Home, Info, Trophy } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-red-600 grid place-items-center text-white shadow-sm">
            <GraduationCap size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-neutral-900">Chitradurga House</p>
            <p className="text-xs text-neutral-500">Courage. Curiosity. Commitment.</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
            <Home size={16} /> Home
          </a>
          <a href="#about" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
            <Info size={16} /> About
          </a>
          <a href="#highlights" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
            <Trophy size={16} /> Highlights
          </a>
          <a href="#join" className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm">Join Us</a>
        </nav>
      </div>
    </header>
  );
}
