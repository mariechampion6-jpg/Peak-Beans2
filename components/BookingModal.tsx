
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialSubject = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-[#0D0F0D]/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#FDFBF7] w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/20 animate-zen-float">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-neutral-400 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="p-12 md:p-16">
          {!submitted ? (
            <>
              <div className="mb-12">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#2D5A27] mb-4 block">Peak & Beans Bordeaux</span>
                <h3 className="text-4xl font-serif italic text-[#1A1C1A]">Commençons votre <br />voyage vitalité.</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 ml-4">Nom complet</label>
                    <input required type="text" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D5A27] transition-all" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 ml-4">Email professionnel</label>
                    <input required type="email" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D5A27] transition-all" placeholder="jean@darwin.fr" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 ml-4">Sujet d'intérêt</label>
                  <select defaultValue={initialSubject} className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D5A27] transition-all appearance-none">
                    <option value="">Sélectionnez une option</option>
                    <option value="Combo Performance">Combo Performance (65€)</option>
                    <option value="Pass Bio-Hacker">Pass Bio-Hacker (149€/mois)</option>
                    <option value="Candidature Franchise">Candidature Franchise</option>
                    <option value="Événement Team Darwin">Événement Team Darwin</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 ml-4">Message (Optionnel)</label>
                  <textarea className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D5A27] transition-all h-32" placeholder="Dites-nous en plus..."></textarea>
                </div>

                <button 
                  disabled={loading}
                  className="w-full bg-[#2D5A27] text-white font-bold py-6 rounded-2xl uppercase text-[10px] tracking-[0.3em] hover:bg-[#1B4332] transition-all flex items-center justify-center space-x-4"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-[#2D5A27]/10 text-[#2D5A27] rounded-full flex items-center justify-center mx-auto mb-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-4xl font-serif italic text-[#1A1C1A] mb-6">Merci pour votre confiance.</h3>
              <p className="text-neutral-500 font-light mb-12 leading-relaxed">
                Nos experts en longévité vous recontactent sous 24h pour finaliser votre expérience Peak & Beans.
              </p>
              <button 
                onClick={onClose}
                className="bg-black text-white px-12 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em]"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
