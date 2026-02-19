
import React, { useState, useEffect } from 'react';
import { generateBrandImage } from '../services/gemini';

const BrandImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateBrandImage(
        "A luxury wellness center in Bordeaux. In the foreground, a modern specialty coffee bar with aesthetic lattes. In the middle ground, a sleek vertical red light therapy panel glowing softly. In the background, a high-tech metallic cryotherapy chamber and a person using professional compression boots on a lounge chair. Minimalist stone walls, lush green plants, zen lighting. Premium and futuristic atmosphere."
      );
      setImageUrl(url);
      setLoading(false);
    };

    fetchImage();
  }, []);

  return (
    <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
      {loading ? (
        <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center space-y-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-[#2D5A27]/20 rounded-full"></div>
            <div className="absolute inset-0 border-t-2 border-[#A7C957] rounded-full animate-spin"></div>
          </div>
          <p className="text-neutral-500 font-light tracking-[0.4em] uppercase text-[10px]">Génération de l'univers Bio-Hacking...</p>
        </div>
      ) : imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt="Peak & Beans Bordeaux Experience" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
            <div className="text-white">
              <span className="bg-[#2D5A27]/60 backdrop-blur-md text-[10px] font-bold tracking-[0.3em] px-4 py-1.5 rounded-full mb-4 inline-block uppercase border border-white/10">Bordeaux Flagship : Recovery & Coffee</span>
              <h3 className="text-4xl font-serif italic max-w-lg leading-tight">L'Élite de la récupération urbaine.</h3>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/40 tracking-widest text-xs uppercase">Vision en pause</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default BrandImage;
