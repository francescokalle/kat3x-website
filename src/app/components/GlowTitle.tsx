import React, { ElementType, ReactNode } from 'react';

interface GlowTitleProps {
  children: ReactNode;
  as?: ElementType;
  /** Classi extra per il testo */
  className?: string; 
  /** Colore del bagliore in formato RGB */
  glowColor?: string;
  /** Opacità di base del bagliore */
  glowOpacity?: string;
  /** Opacità quando l'utente fa hover */
  hoverOpacity?: string;
  /** Espansione del bagliore fuori dal contenitore del testo tramite inset negativo */
  glowSpread?: string; 
  /** Quantità di sfocatura */
  blurAmount?: string;
  /** Durata della transizione */
  transitionDuration?: string;
}

const GlowTitle: React.FC<GlowTitleProps> = ({ 
  children, 
  as: Tag = 'h1', 
  className = 'text-slate-900',
  glowColor = '87, 199, 133',
  glowOpacity = 'opacity-60',
  hoverOpacity = 'opacity-95',
  glowSpread = '-inset-x-10 -inset-y-10 md:-inset-x-32 md:-inset-y-24',
  blurAmount = 'blur-[80px] md:blur-[100px]',
  transitionDuration = 'duration-500',
}) => {
  const dynamicGradient = {
    backgroundImage: `radial-gradient(ellipse at center, rgba(${glowColor}, 1) 0%, rgba(${glowColor}, 0) 70%)`,
  };

  return (
    <div className="relative inline-flex justify-center isolate group max-w-full">
      <Tag 
        className={`relative z-10 text-center font-extrabold tracking-tight ${className}`}
      >
        {/* Layer del Bagliore gestito interamente in CSS con group-hover */}
        <div 
          className={`absolute ${glowSpread} -z-10 pointer-events-none 
            ${blurAmount} transition-all ${transitionDuration} ease-out
            ${glowOpacity} group-hover:${hoverOpacity} group-hover:scale-110`}
          style={dynamicGradient}
          aria-hidden="true"
        />
        
        {children}
      </Tag>
    </div>
  );
};

export default GlowTitle;