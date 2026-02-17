import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = [
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#products' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`container mx-auto px-6 max-w-6xl`}>
        <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/40' : 'bg-transparent border-transparent'}`}>
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">PET FELIZ</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
             <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:bg-white/10 transition-colors group">
                <ShoppingBag size={18} className="text-white group-hover:text-brand-accent transition-colors" />
             </button>
             <button 
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-colors duration-300 hidden md:block"
             >
                Agendar
             </button>
             <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
               {mobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full px-4 md:hidden"
        >
          <div className="glass-panel rounded-2xl p-4 flex flex-col gap-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-center py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <button className="bg-brand-accent text-brand-dark px-5 py-3 rounded-xl font-bold w-full mt-2">
                Agendar Agora
             </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;