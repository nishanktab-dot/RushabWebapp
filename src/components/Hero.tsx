import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-600 text-white flex-1 flex gap-0">
      {/* Abstract Background */}
      <div className="absolute right-[-10%] top-0 h-full w-full opacity-10 flex items-center justify-end pointer-events-none z-0">
        <div className="grid grid-cols-2 gap-4 rotate-12 scale-150">
          <div className="w-32 h-32 bg-white rounded-2xl"></div>
          <div className="w-32 h-32 bg-white rounded-full"></div>
          <div className="w-32 h-32 bg-white rounded-tr-[50%]"></div>
          <div className="w-32 h-32 bg-white rounded-bl-[50%]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500 text-white font-bold text-xs mb-4">
            B2B WHOLESALE SPECIALIST
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Your Complete Stationery & <br className="hidden md:block" /><span className="text-orange-400">Office Solutions</span> Partner.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
            Supplying Bengaluru with quality school, office, and computer consumables for over 25 years. Directed by Rakesh Bafna.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-blue-700 rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center gap-2">
              REQUEST CATALOGUE
            </a>
            <a href="tel:+919845096435" className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" /> CALL NOW
            </a>
          </div>
        </motion.div>
        
        <motion.div
          className="flex-1 w-full max-w-lg hidden md:block relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-48 border border-white/20 p-6 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center shadow-lg group overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-32 border border-white/20 p-6 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center shadow-lg group overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-orange-500 rounded-2xl h-32 p-6 flex flex-col justify-center items-center text-center shadow-lg border border-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="text-4xl font-extrabold mb-1 text-white relative z-10">1000+</span>
                <span className="text-orange-100 font-bold text-xs uppercase relative z-10">Products in Stock</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-48 border border-white/20 p-6 bg-[url('https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center shadow-lg group overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
