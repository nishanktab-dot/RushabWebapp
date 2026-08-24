import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 shrink-0 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none uppercase">RUSHABH TRADING COMPANY</span>
              <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">320, Avenue Rd, Bengaluru</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-slate-300">
              Your Complete Stationery & Office Solutions Partner in Bengaluru. Over 25 years of excellence delivering quality products at unmatched wholesale prices.
            </p>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase font-bold mb-4 text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="hover:text-orange-400 transition-colors">Products & Categories</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Rakesh Bafna</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Request a Quote</a></li>
              <li><a href="tel:+919845096435" className="hover:text-orange-400 transition-colors">Call Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase font-bold mb-4 text-xs tracking-widest">Business Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-slate-300">Monday - Saturday</span>
                <span className="text-white font-medium">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">Sunday</span>
                <span className="text-orange-400 font-bold">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Rushabh Trading Company. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white">
            Wholesale Excellence in Bengaluru.
          </div>
        </div>
      </div>
    </footer>
  );
}
