import { motion } from 'motion/react';
import { ShieldCheck, Truck, Tags, Building2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "25+ Years Experience",
      desc: "Trusted wholesale expertise in Bengaluru since inception."
    },
    {
      icon: <Tags className="w-8 h-8 text-orange-500" />,
      title: "Direct B2B Pricing",
      desc: "Unbeatable wholesale margins for businesses and retailers."
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-500" />,
      title: "Fast Delivery",
      desc: "Same-day dispatch and reliable logistics across the city."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: "Quality Guaranteed",
      desc: "Authentic brands and strictly quality-checked products."
    }
  ];

  return (
    <section className="bg-slate-100 border-y border-slate-200 shrink-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-8 group hover:bg-slate-50 transition-colors"
            >
              <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-blue-600 leading-none mb-2">{feature.title}</h3>
              <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 mt-1 max-w-[200px] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
