import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-accent rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#fff' : '#22d3ee'
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;