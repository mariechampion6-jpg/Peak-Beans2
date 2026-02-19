
import React, { useState, useEffect } from 'react';
import { generateBrandImage } from '../services/gemini';

interface DynamicFeatureImageProps {
  prompt: string;
  alt: string;
}

const DynamicFeatureImage: React.FC<DynamicFeatureImageProps> = ({ prompt, alt }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateBrandImage(prompt);
      setImageUrl(url);
      setLoading(false);
    };

    fetchImage();
  }, [prompt]);

  return (
    <div className="rounded-[3rem] overflow-hidden border border-black/5 aspect-[4/3] shadow-xl relative bg-white/50">
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-2 border-[#2D5A27]/20 border-t-[#2D5A27] rounded-full animate-spin"></div>
          <span className="text-[8px] font-bold tracking-widest text-neutral-400 uppercase">Visualisation...</span>
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-neutral-100">
           <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Image non disponible</span>
        </div>
      )}
    </div>
  );
};

export default DynamicFeatureImage;
