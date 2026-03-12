import React, { ElementType, ReactNode } from 'react';

interface GlowTitleProps {
  children: ReactNode;
  as?: ElementType;
  /** Classi extra per il testo (es. text-slate-800) */
  className?: string; 
  /** Colore del bagliore in formato RGB (default: il tuo verde #57C785 -> 87, 199, 133) */
  glowColor?: string;
  glowOpacity?: string;
  glowSize?: string;
  blurAmount?: string;
}

const GlowTitle: React.FC<GlowTitleProps> = ({ 
  children, 
  as: Tag = 'h1', 
  className = 'text-slate-900', // Colore di default
  glowColor = '87, 199, 133',   // Il tuo verde brand
  glowOpacity = 'opacity-60',
  glowSize = 'px-24 py-20',
  blurAmount = 'blur-[100px]',
}) => {
  
  // Costruiamo il gradiente dinamico basato sul colore passato
  const dynamicGradient = {
    backgroundImage: `radial-gradient(ellipse at center, rgba(${glowColor}, 1) 0%, rgba(${glowColor}, 0) 80%)`
  };

  return (
    <div className="relative flex justify-center isolate overflow-visible">
      <Tag 
        className={`relative z-10 text-center leading-tight text-4xl sm:text-5xl font-extrabold tracking-tight ${glowSize} ${className}`}
      >
        {/* Layer del Bagliore con colore dinamico */}
        <div 
          className={`absolute inset-0 -z-10 pointer-events-none ${glowOpacity} ${blurAmount}`}
          style={dynamicGradient}
          aria-hidden="true"
        />

        {children}
      </Tag>
    </div>
  );
};

export default GlowTitle;