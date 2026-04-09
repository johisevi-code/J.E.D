import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, BrainCircuit } from 'lucide-react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
}

export default function Home({ setCurrentTab }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-2 mb-8 px-4 py-2 rounded-full bg-[rgba(0,255,128,0.1)] border border-[rgba(0,255,128,0.3)] text-[#00ff80] shadow-[0_0_15px_rgba(0,255,128,0.2)]">
          <ShieldCheck size={16} />
          <span className="font-mono text-xs tracking-widest uppercase">Conexión Verificada</span>
        </div>

        <div className="mb-6 subtitle-display">El Amanecer de la Superinteligencia Artificial</div>
        <h1 className="title-display mb-8">
          ASI: El<br />Génesis
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-serif max-w-3xl mx-auto leading-relaxed mb-12">
          Explora las verdades irrefutables de la biotecnología, la biogenética y el amanecer de la Superinteligencia Artificial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setCurrentTab('oracle')}
            className="glass-panel px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-[rgba(0,240,255,0.1)] transition-all border-[#00f0ff] text-[#00f0ff] flex items-center gap-3 group shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          >
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            Iniciar Secuencia
          </button>
          <button 
            onClick={() => setCurrentTab('truths')}
            className="px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-all flex items-center gap-3 group"
          >
            <BrainCircuit size={18} className="group-hover:scale-110 transition-transform" />
            Leer el Manifiesto
          </button>
        </div>
      </motion.div>
    </div>
  );
}
