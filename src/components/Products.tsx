import { motion } from 'motion/react';
import { Briefcase, BookOpen, Monitor, PenTool, Gift, ArrowRight } from 'lucide-react';
import officeDeskImage from '../assets/images/office_desk_files_pens_1787289758182.jpg';

export default function Products() {
  const categories = [
    {
      title: "Office Supplies",
      items: "Pens, Notepads, Files, Folders, Desk Organizers",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100",
      image: officeDeskImage
    },
    {
      title: "School Materials",
      items: "Books, Notebooks, Uniforms, Geometry Boxes",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-100",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Computer Consumables",
      items: "Cartridges, Cables, Printers, Peripherals",
      icon: <Monitor className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-100",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Drawing Materials",
      items: "Sketching Pads, Markers, Oil Pastels, Canvas",
      icon: <PenTool className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Corporate Novelties",
      items: "Gifts, Diaries, Merchandise, Trophies",
      icon: <Gift className="w-8 h-8 text-rose-600" />,
      color: "bg-rose-100",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Explore Our <span className="text-blue-700">Categories</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From basic office essentials to complete corporate gifting solutions, we maintain a vast inventory to meet all your bulk requirements instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={cat.image} alt={cat.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 ${cat.color} p-3 rounded-xl z-20`}>
                  {cat.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow">{cat.items}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors w-max text-sm uppercase">
                  Request Catalogue <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group bg-slate-900 rounded-2xl overflow-hidden p-8 flex flex-col items-center justify-center text-center border border-slate-800"
          >
            <h3 className="text-2xl font-extrabold text-white mb-4">Bulk Orders?</h3>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              We offer exclusive tier-based discounts and custom solutions for schools, institutions, and corporate offices.
            </p>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full md:w-auto uppercase text-sm">
              Get Custom Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
