"use client";

import React, { ElementType, ReactNode, useState } from 'react';

interface GlowTitleProps {
  children: ReactNode;
  as?: ElementType;
  /** Classi extra per il testo (es. text-slate-800) */
  className?: string; 
  /** Colore del bagliore in formato RGB (default: il tuo verde #57C785 -> 87, 199, 133) */
  glowColor?: string;
  /** Opacità di base del bagliore (default: 40%) */
  glowOpacity?: string;
  /** Opacità quando l'utente fa hover (default: quasi piena) */
  hoverOpacity?: string;
  /** Dimensione e padding attorno al testo */
  glowSize?: string;
  /** Quantità di sfocatura (default: 100px) */
  blurAmount?: string;
  /** Durata della transizione (default: 500ms) */
  transitionDuration?: string;
}

const GlowTitle: React.FC<GlowTitleProps> = ({ 
  children, 
  as: Tag = 'h1', 
  className = 'text-slate-900', // Colore di default
  glowColor = '87, 199, 133',   // Il tuo verde brand
  glowOpacity = 'opacity-60',    // Meno intenso di base
  hoverOpacity = 'opacity-95',   // Molto intenso in hover
  glowSize = 'px-24 py-20',
  blurAmount = 'blur-[100px]',
  transitionDuration = 'duration-500', // Definizione della durata
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Costruiamo il gradiente dinamico basato sul colore passato
  const dynamicGradient = {
    backgroundImage: `radial-gradient(ellipse at center, rgba(${glowColor}, 1) 0%, rgba(${glowColor}, 0) 80%)`,
    // Rimuoviamo la transizione da qui, la gestiremo con Tailwind per coerenza
  };

  return (
    <div className="relative flex justify-center isolate overflow-visible">
      <Tag 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 text-center cursor-default leading-tight text-4xl sm:text-5xl font-extrabold tracking-tight ${glowSize} ${className}`}
      >
        {/* Layer del Bagliore con colore dinamico e ANIMAZIONE */}
        <div 
          className={`absolute inset-0 -z-10 pointer-events-none 
            ${blurAmount} 
            {/* Classi per l'animazione graduale */}
            transition-all ${transitionDuration} ease-out
            {/* Applica opacità e scala in base allo stato dell'hover */}
            ${isHovered ? `${hoverOpacity} scale-125` : glowOpacity}`}
          style={dynamicGradient}
          aria-hidden="true"
        />

        {children}
      </Tag>
    </div>
  );
};

export default GlowTitle;