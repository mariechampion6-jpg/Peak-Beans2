
import React from 'react';

export const COLORS = {
  primary: '#2D5A27', // Vert forêt profond
  secondary: '#8B5A2B', // Marron grain de café
  accent: '#A7C957', // Vert feuille clair
  zen: '#F7F5F2', // Pierre Zen
  dark: '#1A1C1A', // Texte principal
};

export const LOGO = {
  Full: ({ className = "h-12" }: { className?: string }) => (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Montagne avec ombre légère */}
        <path d="M200 40 L310 210 L90 210 Z" fill="#2D5A27" opacity="0.1" />
        <path d="M200 40 L260 160 L140 160 Z" fill="#FDFBF7" />
        {/* Feuilles */}
        <path d="M120 180 Q100 120 160 150 Q140 210 120 180" fill="#A7C957" />
        <path d="M280 180 Q300 120 240 150 Q260 210 280 180" fill="#2D5A27" />
        {/* Grains de Café */}
        <ellipse cx="180" cy="200" rx="15" ry="10" fill="#8B5A2B" transform="rotate(-30 180 200)" />
        <ellipse cx="220" cy="205" rx="15" ry="10" fill="#8B5A2B" transform="rotate(20 220 205)" />
        <ellipse cx="200" cy="225" rx="18" ry="12" fill="#8B5A2B" />
        <ellipse cx="160" cy="220" rx="12" ry="8" fill="#8B5A2B" transform="rotate(45 160 220)" />
        <ellipse cx="240" cy="220" rx="12" ry="8" fill="#8B5A2B" transform="rotate(-45 240 220)" />
      </svg>
      <div className="text-center mt-2">
        <span className="block font-serif font-bold text-2xl tracking-[0.15em] text-[#1A1C1A] uppercase">PEAK <span className="text-[#8B5A2B]">&</span> BEANS</span>
      </div>
    </div>
  )
};

export const ICONS = {
  Coffee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
  ),
  Cryo: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>
  ),
  RedLight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 8 4 4-4 4-4-4 4-4Z"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  ),
  Massage: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18a4 4 0 0 0-8 0"/><circle cx="12" cy="10" r="4"/><path d="m7 3 1 4"/><path d="m17 3-1 4"/></svg>
  ),
  Compression: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2v20M17 2v20M2 7h20M2 17h20"/></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Leaf: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10Z"/><path d="M17.4 7c-2.6 1.8-4.6 4.2-6.4 7"/></svg>
  )
};
