import React from 'react';

/**
 * Global glassmorphism background: dot grid pattern + animated color orbs.
 * Add as the first child inside every page wrapper div.
 */
export default function PageBackground() {
  return (
    <>
      {/* Dot grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none -z-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      {/* Animated blurred color orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-300/30 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute top-[40%] left-[-15%] w-[500px] h-[500px] bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"
          style={{ animationDuration: '12s' }}
        />
      </div>
    </>
  );
}
