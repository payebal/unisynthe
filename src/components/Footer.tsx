import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>&copy; 2026 UniSynthe. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="transition-colors hover:text-primary">
            Privacy
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
