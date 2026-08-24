import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import aboutImage from '../assets/images/regenerated_image_1787304314730.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="w-full md:w-5/12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={aboutImage} 
              alt="Rakesh Bafna, Owner" 
              referrerPolicy="no-referrer"
              className="w-full rounded-[3rem] shadow-xl object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
               <div className="bg-orange-100 p-3 rounded-full text-orange-600 font-bold text-2xl">
                 25+
               </div>
               <div>
                 <p className="text-slate-900 font-bold leading-tight">Years of<br/>Trust</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              A Legacy of <span className="text-orange-500">Excellence</span>
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Founded on the principles of reliability and quality, <strong>Rushabh Trading Company</strong> has grown to become Bengaluru's premier wholesale destination for stationery and office consumables. 
              </p>
              <p>
                Located at 320, Avenue Rd, Medarpet, we understand the fast-paced needs of modern businesses, educational institutions, and retailers. Our extensive network allows us to provide top-tier brands at unmatched wholesale prices.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative mt-10">
              <Quote className="absolute top-4 right-6 w-16 h-16 text-slate-200" />
              <p className="text-lg text-slate-700 italic relative z-10 mb-6 font-medium">
                "Our mission is simple: to be the most reliable and resourceful partner for every school and office in Bengaluru. Your productivity begins with our supplies."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Rakesh Bafna</h4>
                  <p className="text-blue-600 font-medium text-sm">Founder & Owner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
