import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute inset-0 bg-hero-glow opacity-60 animate-pulse"></div>
        {/* Animated Particles (CSS only for perf) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple/20 rounded-full blur-[100px] mix-blend-screen animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-32 left-[10%] w-12 h-12 glass-panel rounded-2xl flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={20} className="text-brand-accent" />
      </motion.div>

       <motion.div 
        className="absolute bottom-32 right-[10%] w-16 h-16 glass-panel rounded-full flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-2xl">🐾</span>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Text Content */}
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex flex-col gap-6 text-center lg:text-left pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">Pet Shop 2.0</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1]">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400"
              >
                Cuidado
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400"
              >
                Premium
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-brand-accent font-serif italic font-light"
              >
                para Pets
              </motion.span>
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            A experiência definitiva para o seu melhor amigo. Tecnologia, carinho e design unidos para o bem-estar animal.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
          >
            <button className="relative overflow-hidden group bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Agendar Visita <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all">
              Ver Produtos
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div style={{ scale: scaleImg, y: yImg }} className="relative h-full w-full hidden lg:block">
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-[500px] h-[600px]">
               {/* Abstract geometric frame */}
               <div className="absolute inset-0 border border-white/10 rounded-[2rem] transform rotate-3"></div>
               <div className="absolute inset-0 border border-white/5 rounded-[2rem] transform -rotate-3 scale-95"></div>
               
               {/* Main Image Masked */}
               <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-brand-purple/20">
                 <img 
                   src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop" 
                   alt="Cute Dog" 
                   className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                 
                 {/* Floating Card inside image */}
                 <motion.div 
                   initial={{ x: 50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 1, duration: 0.8 }}
                   className="absolute bottom-8 right-8 glass-panel p-4 rounded-xl flex items-center gap-3"
                 >
                    <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-400">
                      ✨
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Status</p>
                      <p className="font-bold text-white">Muito Feliz</p>
                    </div>
                 </motion.div>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
      </motion.div>
    </section>
  );
};

export default Hero;