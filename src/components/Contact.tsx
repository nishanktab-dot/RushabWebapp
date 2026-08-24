import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission to WhatsApp
    const text = `Hi, I am ${formData.name} from ${formData.company}. I'm interested in ${formData.interest}. Message: ${formData.message}`;
    window.open(`https://wa.me/919845096435?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Let's Talk <span className="text-blue-400">Business</span></h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Ready to upgrade your supply chain? Request a catalogue, ask for a bulk quote, or simply say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="tel:+919845096435" className="bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-slate-400 text-sm font-medium mb-1">Mobile / WhatsApp</h4>
                <p className="text-xl font-bold text-white">+91 98450 96435</p>
              </a>
              
              <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-orange-500 transition-colors group">
                <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-slate-400 text-sm font-medium mb-1">Landline & Centrex</h4>
                <p className="text-lg font-bold text-white leading-snug">080 41249005<br/>080 41695444</p>
                <p className="text-sm text-slate-400 mt-2">Centrex: 22505 / 24884</p>
              </div>

              <a href="mailto:rushabhtradingco@gmail.com" className="bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group sm:col-span-2">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-slate-400 text-sm font-medium mb-1">Email Address</h4>
                <p className="text-lg md:text-xl font-bold text-white">rushabhtradingco@gmail.com</p>
              </a>
            </div>

            {/* Map Embed */}
            <div className="bg-slate-800 p-2 rounded-3xl border border-slate-700 h-64 overflow-hidden relative group">
              <iframe 
                src="https://maps.google.com/maps?q=320,%20Avenue%20Rd,%20Medarpet,%20Old%20Tharagupet,%20Dodpete,%20Nagarathpete,%20Bengaluru,%20Karnataka%20560002,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity filter invert-[.9] hue-rotate-180"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200">320, Avenue Rd, Medarpet, Bengaluru, Karnataka 560002, India</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company / School</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} placeholder="Tech Corp Ltd." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Product Interest</label>
                  <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                    <option value="" disabled>Select category...</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="School Materials">School Materials</option>
                    <option value="Computer Consumables">Computer Consumables</option>
                    <option value="Drawing Materials">Drawing Materials</option>
                    <option value="Novelties">Corporate Novelties</option>
                    <option value="Multiple/General">Multiple Categories</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message / Requirements</label>
                <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your bulk requirement..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send to WhatsApp <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
