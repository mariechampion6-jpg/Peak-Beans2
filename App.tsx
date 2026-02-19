
import React, { useState } from 'react';
import { ICONS, COLORS, LOGO } from './constants';
import BrandImage from './components/BrandImage';
import Features from './components/Features';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (subject: string = "") => {
    setModalSubject(subject);
    setIsModalOpen(true);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1C1A] selection:bg-[#2D5A27] selection:text-white">
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialSubject={modalSubject}
      />

      {/* Nav Zen */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#F7F5F2]/80 backdrop-blur-2xl border-b border-black/5">
        <div className="flex items-center space-x-6">
          <div className="scale-[0.45] origin-left -my-10">
            <LOGO.Full className="h-24" />
          </div>
        </div>

        <div className="hidden lg:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
          <a href="#lab" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-[#2D5A27] transition-all">Recovery Lab</a>
          <a href="#bar" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-[#2D5A27] transition-all">Bio-Bar</a>
          <a href="#tarifs" onClick={(e) => scrollToSection(e, 'tarifs')} className="hover:text-[#2D5A27] transition-all">Tarifs</a>
          <a href="#investir" onClick={(e) => openModal("Candidature Franchise")} className="hover:text-[#2D5A27] transition-all">Investir</a>
        </div>

        <button 
          onClick={() => openModal("Candidature Franchise")}
          className="bg-[#2D5A27] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#1B4332] transition-all shadow-lg shadow-[#2D5A27]/10"
        >
          Candidater
        </button>
      </nav>

      {/* Hero */}
      <header className="relative pt-64 pb-24 px-8 lg:px-24 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 bg-[#2D5A27]/5 border border-[#2D5A27]/10 px-6 py-2 rounded-full mb-12">
            <ICONS.MapPin />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#2D5A27]">Bordeaux - Darwin Eco-système</span>
        </div>
        
        <h2 className="text-7xl md:text-9xl font-serif mb-12 leading-[0.9] text-[#1A1C1A] italic">
            Cultivez votre <br />
            <span className="gradient-text not-italic font-bold">énergie.</span>
        </h2>
        
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light mb-16">
            Peak & Beans : Le premier Bio-Hacking Lab & Specialty Coffee de Bordeaux. <br />
            <span className="text-[#2D5A27] font-medium italic">Performance, Sérénité, Longévité.</span>
        </p>

        <BrandImage />
      </header>

      {/* Best Seller Highlight */}
      <section className="py-24 px-8 lg:px-24 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] p-12 border border-[#2D5A27]/10 bg-white shadow-xl shadow-black/5">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-left">
                    <span className="bg-[#A7C957]/20 text-[#2D5A27] text-[9px] font-black tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 inline-block uppercase">Expérience Signature</span>
                    <h3 className="text-4xl font-serif italic mb-6">Combo Performance</h3>
                    <p className="text-neutral-500 font-light mb-8 leading-relaxed">
                        Une pause optimisée de 45 min : 20 min de Bottes de compression + 20 min de Massage Crânien + 1 Café "Focus" offert.
                    </p>
                    <div className="text-4xl font-bold text-[#1A1C1A] mb-2">65 €</div>
                </div>
                <div className="w-full md:w-auto">
                    <button 
                      onClick={() => openModal("Combo Performance")}
                      className="w-full bg-[#1A1C1A] text-white px-10 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#2D5A27] transition-all shadow-xl shadow-black/10"
                    >
                        Réserver le Combo
                    </button>
                </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#2D5A27]/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section id="tarifs" className="py-32 px-8 lg:px-24 bg-white/40">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* BIO-BAR */}
                <div className="glass-panel p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-black/5 transition-all group">
                    <div className="text-[#8B5A2B] mb-8 group-hover:scale-110 transition-transform"><ICONS.Coffee /></div>
                    <h4 className="text-2xl font-serif italic mb-8">Bio-Bar <br /><span className="text-neutral-400 text-sm not-italic font-sans uppercase tracking-widest">Nootropique</span></h4>
                    <div className="space-y-6 mb-12">
                        <div className="flex justify-between items-end border-b border-black/5 pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Café & Latte "Focus"</p><p className="text-[10px] text-neutral-500">Lion's Mane / Adaptogènes</p></div>
                            <p className="text-[#8B5A2B] font-bold">5,50 € - 7,50 €</p>
                        </div>
                        <div className="flex justify-between items-end border-b border-black/5 pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Élixirs Récupération</p><p className="text-[10px] text-neutral-500">Collagène / Magnésium</p></div>
                            <p className="text-[#8B5A2B] font-bold">6,50 €</p>
                        </div>
                        <div className="flex justify-between items-end pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Bio-Snacking</p><p className="text-[10px] text-neutral-500">Energy Balls Keto</p></div>
                            <p className="text-[#8B5A2B] font-bold">4,00 € - 8,00 €</p>
                        </div>
                    </div>
                    <button onClick={() => openModal("Carte Bio-Bar")} className="w-full py-4 rounded-xl border border-black/5 text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Voir la carte</button>
                </div>

                {/* RECOVERY LAB */}
                <div className="p-10 rounded-[2.5rem] bg-[#2D5A27] text-white shadow-2xl shadow-[#2D5A27]/20 group transition-all">
                    <div className="text-[#A7C957] mb-8 group-hover:scale-110 transition-transform"><ICONS.Cryo /></div>
                    <h4 className="text-2xl font-serif italic mb-8 text-white">Recovery Lab <br /><span className="text-white/40 text-sm not-italic font-sans uppercase tracking-widest">Technologies</span></h4>
                    <div className="space-y-6 mb-12">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <div><p className="font-semibold text-white">Cryothérapie Localisée</p><p className="text-[10px] text-white/60">Soin Froid Ciblé</p></div>
                            <p className="text-[#A7C957] font-bold">35 €</p>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <div><p className="font-semibold text-white">Lumière Rouge</p><p className="text-[10px] text-white/60">Régénération Cellulaire</p></div>
                            <p className="text-[#A7C957] font-bold">30 €</p>
                        </div>
                        <div className="flex justify-between items-end pb-4">
                            <div><p className="font-semibold text-white">Compression Bottes</p><p className="text-[10px] text-white/60">Drainage Lymphatique</p></div>
                            <p className="text-[#A7C957] font-bold">25 €</p>
                        </div>
                    </div>
                    <button onClick={() => openModal("Séance Lab")} className="w-full py-4 rounded-xl bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D5A27] transition-all">Réserver une séance</button>
                </div>

                {/* MASSAGE STUDIO */}
                <div className="glass-panel p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-black/5 transition-all group">
                    <div className="text-[#1A1C1A] mb-8 group-hover:scale-110 transition-transform"><ICONS.Massage /></div>
                    <h4 className="text-2xl font-serif italic mb-8">Studio Massage <br /><span className="text-neutral-400 text-sm not-italic font-sans uppercase tracking-widest">Bio-Recovery</span></h4>
                    <div className="space-y-6 mb-12">
                        <div className="flex justify-between items-end border-b border-black/5 pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Deep Focus (30min)</p><p className="text-[10px] text-neutral-500">Massage Crânien Darwin</p></div>
                            <p className="text-[#1A1C1A] font-bold">45 €</p>
                        </div>
                        <div className="flex justify-between items-end border-b border-black/5 pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Bio-Recovery (50min)</p><p className="text-[10px] text-neutral-500">Sportif & Suède</p></div>
                            <p className="text-[#1A1C1A] font-bold">85 €</p>
                        </div>
                        <div className="flex justify-between items-end pb-4">
                            <div><p className="text-[#1A1C1A] font-semibold">Option Bio-Huile</p><p className="text-[10px] text-neutral-500">Huile Enrichie CBD</p></div>
                            <p className="text-[#2D5A27] font-bold">+ 5 €</p>
                        </div>
                    </div>
                    <button onClick={() => openModal("Soin Massage")} className="w-full py-4 rounded-xl border border-black/5 text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Prendre rendez-vous</button>
                </div>
            </div>
        </div>
      </section>

      <div id="features">
        <Features />
      </div>

      {/* Subscriptions */}
      <section className="py-40 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#8B5A2B] uppercase mb-8 block">Le Cœur de l'Énergie</span>
            <h3 className="text-5xl md:text-7xl font-serif italic mb-24 text-[#1A1C1A]">Abonnements.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* PASS FOCUS */}
                <div className="p-12 rounded-[3rem] bg-white border border-black/5 shadow-xl shadow-black/5 flex flex-col items-center">
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-4 text-neutral-500">Pass Focus</h5>
                    <div className="text-5xl font-serif italic mb-8 text-[#1A1C1A]">79€ <span className="text-xs not-italic text-neutral-400">/mois</span></div>
                    <ul className="text-neutral-600 text-sm space-y-4 mb-12 flex-grow text-left w-full pl-8 list-disc">
                        <li>1 Café Nootropique / jour</li>
                        <li>2 Séances Tech / mois</li>
                    </ul>
                    <button onClick={() => openModal("Pass Focus")} className="w-full py-4 rounded-xl border border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1C1A] hover:text-white transition-all">Souscrire</button>
                </div>

                {/* PASS BIO-HACKER */}
                <div className="p-12 rounded-[3.5rem] bg-[#1A1C1A] text-white flex flex-col items-center relative scale-105 shadow-2xl shadow-black/20">
                    <div className="absolute -top-4 bg-[#2D5A27] text-white text-[9px] font-black px-6 py-2 rounded-full tracking-widest uppercase shadow-lg shadow-[#2D5A27]/20">Mouvement Hacker</div>
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/50">Pass Bio-Hacker</h5>
                    <div className="text-5xl font-serif italic mb-8">149€ <span className="text-xs not-italic text-white/30">/mois</span></div>
                    <ul className="text-white/80 text-sm space-y-4 mb-12 flex-grow text-left w-full pl-8 list-disc font-light">
                        <li className="font-bold text-[#A7C957]">Séances Tech ILLIMITÉES</li>
                        <li>(Cryo / Rouge / Bottes)</li>
                        <li>-10% Bar & Massages</li>
                    </ul>
                    <button onClick={() => openModal("Pass Bio-Hacker")} className="w-full py-4 rounded-xl bg-[#2D5A27] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#1B4332] transition-all">Choisir l'illimité</button>
                </div>

                {/* PASS TOTAL PEAK */}
                <div className="p-12 rounded-[3rem] bg-white border border-black/5 shadow-xl shadow-black/5 flex flex-col items-center">
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-4 text-neutral-500">Total Peak</h5>
                    <div className="text-5xl font-serif italic mb-8 text-[#1A1C1A]">229€ <span className="text-xs not-italic text-neutral-400">/mois</span></div>
                    <ul className="text-neutral-600 text-sm space-y-4 mb-12 flex-grow text-left w-full pl-8 list-disc">
                        <li>Illimité Technologies</li>
                        <li>1 Massage Crânien / mois</li>
                        <li>1 Boisson / jour</li>
                    </ul>
                    <button onClick={() => openModal("Pass Total Peak")} className="w-full py-4 rounded-xl border border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1C1A] hover:text-white transition-all">Souscrire</button>
                </div>
            </div>
            
            <div className="mt-20 glass-panel p-8 rounded-2xl border-white/5 inline-block cursor-pointer hover:border-[#2D5A27]/30 transition-all" onClick={() => openModal("Pack Team Darwin")}>
                <p className="text-neutral-500 text-sm">Offre Entreprise <strong className="text-black">Pack "Team Darwin"</strong> : Sur devis pour les équipes de 5+ salariés.</p>
            </div>
        </div>
      </section>

      {/* Footer Zen */}
      <footer className="py-32 border-t border-black/5 px-8 lg:px-24">
        <div className="flex flex-col items-center">
            <LOGO.Full className="h-24 mb-12 opacity-80" />
            <p className="text-[9px] text-neutral-400 tracking-[0.5em] uppercase mb-8">
                BORDEAUX DARWIN | CULTIVEZ VOTRE ÉNERGIE
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D5A27]">
                <a href="#" onClick={(e) => { e.preventDefault(); openModal("Candidature Franchise"); }} className="hover:text-black transition-colors">Candidater</a>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal("Dossier Presse"); }} className="hover:text-black transition-colors">Presse</a>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal("Investissement"); }} className="hover:text-black transition-colors">Investisseurs</a>
            </div>
            <p className="mt-16 text-[8px] text-neutral-300 tracking-widest uppercase">&copy; 2025 Peak & Beans. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
