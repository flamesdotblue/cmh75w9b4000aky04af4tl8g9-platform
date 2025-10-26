export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Chitradurga House. All rights reserved.</p>
        <div className="text-xs text-neutral-500">
          Built for our school community • Color: Crimson Red • Motto: Rise with Resolve
        </div>
      </div>
    </footer>
  );
}
