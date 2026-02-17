import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Product } from '../types';
import { ArrowUpRight } from 'lucide-react';

const products: Product[] = [
  { id: 1, name: "Coleira Smart LED", price: "R$ 129,90", category: "Tech", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Cama Ortopédica Cloud", price: "R$ 289,00", category: "Conforto", image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Ração Premium Organic", price: "R$ 89,90", category: "Nutrição", image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d6d?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Brinquedo Interativo AI", price: "R$ 159,90", category: "Diversão", image: "https://images.unsplash.com/photo-1575859431774-2e68e2999b10?q=80&w=800&auto=format&fit=crop" },
];

const Products: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="products" className="py-32 bg-[#0a0f1c] overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-2 block">Curadoria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Destaques da Temporada</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
          Ver Coleção Completa <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Horizontal Draggable-like area */}
      <div className="w-full relative">
        <motion.div 
          style={{ x: window.innerWidth > 768 ? xMove : 0 }} 
          className="flex flex-col md:flex-row gap-8 px-6 md:w-max mx-auto md:mx-0"
        >
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-[400px] group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Placeholder */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                
                {/* Floating Add Button */}
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-accent">
                  <ArrowUpRight size={20} />
                </button>
                
                {/* Tag */}
                <span className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  {product.category}
                </span>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-slate-400">Edição Limitada</p>
                </div>
                <span className="text-xl font-mono text-brand-accent">{product.price}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;