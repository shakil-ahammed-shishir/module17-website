import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-extrabold text-white">
            Bright<span className="text-indigo-400">Wave</span>
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Simple, modern digital solutions for growing businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:text-indigo-400" to="/">Home</Link></li>
            <li><Link className="hover:text-indigo-400" to="/about">About</Link></li>
            <li><Link className="hover:text-indigo-400" to="/services">Services</Link></li>
            <li><Link className="hover:text-indigo-400" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-indigo-400" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>Dhaka, Bangladesh</li>
            <li>hello@brightwave.example</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BrightWave. All rights reserved.
      </div>
    </footer>
  );
}
