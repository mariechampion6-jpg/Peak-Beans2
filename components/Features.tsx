
import React from 'react';
import { ICONS } from '../constants';
import DynamicFeatureImage from './DynamicFeatureImage';

const Features: React.FC = () => {
  return (
    <section className="py-40 px-8 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        {/* Lab Section */}
        <div className="relative group">
          <div className="mb-16">
            <div className="w-20 h-20 bg-[#2D5A27]/5 text-[#2D5A27] rounded-full flex items-center justify-center mb-12 border border-[#2D5A27]/10 group-hover:scale-110 transition-transform duration-1000">
              <ICONS.Cryo />
            </div>
            <h2 className="text-6xl font-serif mb-8 italic text-[#1A1C1A]">Le Lab.</h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-12 text-xl max-w-md">
                Technologies de bio-hacking pour une restauration profonde de votre biologie.
            </p>
            <div className="space-y-6">
              {[
                "Cryothérapie Localisée Anti-Inflammatoire",
                "Lumière Rouge / Photobiomodulation",
                "Compression Pneumatique Dynamic",
                "Recovery Assistée Darwin"
              ].map((tech, i) => (
                <div key={i} className="flex items-center text-[#1A1C1A] font-light tracking-widest text-xs uppercase group/item">
                  <div className="w-8 h-[1px] bg-[#2D5A27]/20 mr-6 transition-all group-hover/item:w-12 group-hover/item:bg-[#2D5A27]"></div>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <DynamicFeatureImage 
            alt="Cryothérapie technologie" 
            prompt="Close-up of a high-tech metallic cryotherapy chamber and red light therapy panel in a zen, luxury wellness clinic in Bordeaux. Soft cinematic lighting, minimalist stone textures, premium medical aesthetic."
          />
        </div>

        {/* Bar Section */}
        <div className="relative group md:mt-48">
          <div className="mb-16">
            <div className="w-20 h-20 bg-[#8B5A2B]/5 text-[#8B5A2B] rounded-full flex items-center justify-center mb-12 border border-[#8B5A2B]/10 group-hover:scale-110 transition-transform duration-1000">
              <ICONS.Coffee />
            </div>
            <h2 className="text-6xl font-serif mb-8 italic text-[#1A1C1A]">Le Bar.</h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-12 text-xl max-w-md">
                Des grains de spécialité associés aux meilleurs adaptogènes pour votre clarté mentale.
            </p>
            <div className="space-y-6">
              {[
                "Focus : Lion's Mane & Cordyceps",
                "Calm : Ashwagandha & Magnesium",
                "Sourcing Direct-Trade Ethique",
                "Élixirs Collagène & Curcuma"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-[#1A1C1A] font-light tracking-widest text-xs uppercase group/item">
                  <div className="w-8 h-[1px] bg-[#8B5A2B]/20 mr-6 transition-all group-hover/item:w-12 group-hover/item:bg-[#8B5A2B]"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <DynamicFeatureImage 
            alt="Café nootropique spécialité" 
            prompt="Aesthetic close-up of a specialty latte with beautiful foam art, served on a stone coaster next to a jar of adaptogenic mushrooms. Zen minimalist cafe interior background, warm natural light."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
