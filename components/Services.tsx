import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Bath, HeartPulse, ShoppingBag } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Banho & Spa",
    description: "Hidratação profunda com produtos orgânicos e massagem relaxante.",
    icon: "bath"
  },
  {
    id: 2,
    title: "Tosa Stylist",
    description: "Cortes modernos seguindo as tendências mundiais de estética animal.",
    icon: "scissors"
  },
  {
    id: 3,
    title: "Veterinária 24h",
    description: "Tecnologia de ponta para diagnósticos precisos e cuidado integral.",
    icon: "health"
  },
  {
    id: 4,
    title: "Personal Shopper",
    description: "Consultoria para escolher os melhores acessórios e brinquedos.",
    icon: "shop"
  }
];

const IconMap: Record<string, React.ReactNode> = {
  bath: <Bath size={32} />,
  scissors: <Scissors size={32} />,
  health: <HeartPulse size={32} />,
  shop: <ShoppingBag size={32} />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-brand-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/10 via-brand-dark to-brand-dark pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Serviços Exclusivos
          </h2>
          <p className="text-slate-400 max-w-lg text-lg">
            Um ecossistema completo de bem-estar. Não oferecemos apenas serviços, oferecemos experiências.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass-panel p-8 rounded-3xl h-full relative overflow-hidden transition-colors duration-500 hover:bg-white/5">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/20">
                    {IconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Decoration Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;