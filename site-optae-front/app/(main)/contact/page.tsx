import React from 'react';
import {Mail,Phone,MapPin,} from "lucide-react"; 


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* COLONNE GAUCHE : INFOS */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1B2A6B] mb-4">
                  Parlons de vos enjeux.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Vous avez un projet de transformation ou besoin d'un diagnostic de performance ? 
                  Nos experts vous répondent sous 48h.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B2A6B]/10 flex items-center justify-center text-[#1B2A6B]">
                    <Mail size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">contact@optae.fr</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B2A6B]/10 flex items-center justify-center text-[#1B2A6B]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Paris, France</span>
                </div>
                <a href="tel:+33149289343" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#1B2A6B]/10 flex items-center justify-center text-[#1B2A6B]">
                    <Phone size={16} />
                  </div>
                  <span className="text-gray-700 font-medium"> 01 49 28 93 43</span>
                </a>
                 
              </div>
            </div>

            {/* COLONNE DROITE : LE FORMULAIRE */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nom</label>
                    <input type="text" className="border-b border-gray-200 py-2 focus:border-[#1B2A6B] outline-none transition-colors" placeholder="Ex: Dupont" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Prénom</label>
                    <input type="text" className="border-b border-gray-200 py-2 focus:border-[#1B2A6B] outline-none transition-colors" placeholder="Ex: Jean" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Sujet</label>
                  <input type="text" className="border-b border-gray-200 py-2 focus:border-[#1B2A6B] outline-none transition-colors" placeholder="L'objet de votre demande" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                  <textarea rows={4} className="border border-gray-200 p-3 rounded-lg focus:border-[#1B2A6B] outline-none transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?" />
                </div>

                <button className="w-full bg-[#1B2A6B] text-white py-4 rounded-xl font-bold hover:bg-[#253785] transition-all shadow-lg shadow-blue-900/10">
                  Envoyer le message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}