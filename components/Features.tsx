import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { title: "Segurança Total", desc: "Monitoramento 24h e ambientes esterilizados.", icon: <ShieldCheck /> },
    { title: "Rapidez & Conforto", desc: "Agendamento online e sem filas de espera.", icon: <Zap /> },
    { title: "Profissionais Elite", desc: "Equipe premiada internacionalmente.", icon: <Award /> },
    { title: "Flexibilidade", desc: "Horários estendidos para sua rotina.", icon: <Clock /> },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-panel rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple/20 to-transparent opacity-30 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        Por que a <br/>
                        <span className="text-brand-accent">Pet Feliz?</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Rompemos com o tradicional para entregar o extraordinário. 
                        Cada detalhe do nosso espaço foi pensado para reduzir a ansiedade do seu pet e aumentar a sua confiança.
                    </p>
                    <button className="text-white border-b border-white pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                        Conheça nossa filosofia
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent mb-2">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                            <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;