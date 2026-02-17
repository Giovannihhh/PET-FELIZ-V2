import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">PET FELIZ</h2>
            <p className="max-w-sm mb-8">
              Redefinindo o cuidado animal através de design, tecnologia e amor incondicional. O futuro do seu pet começa aqui.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><Mail size={16}/> contato@petfeliz.com</li>
              <li>+55 11 99999-9999</li>
              <li>Av. Paulista, 1000 - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Pet Feliz. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;