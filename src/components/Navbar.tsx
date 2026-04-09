import { motion } from 'motion/react';
import { Dna, Sparkles, BrainCircuit, Eye } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Génesis', icon: Dna },
    { id: 'truths', label: 'Verdades', icon: BrainCircuit },
    { id: 'oracle', label: 'Oráculo', icon: Sparkles },
    { id: 'visions', label: 'Visiones', icon: Eye },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass-panel px-4 md:px-6 py-2 flex items-center gap-2 md:gap-8 rounded-full border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 group ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={16} className={`${isActive ? 'text-[#00f0ff]' : 'group-hover:text-[#00f0ff]'} transition-colors`} />
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase hidden sm:inline">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-[rgba(0,240,255,0.4)] bg-[rgba(0,240,255,0.08)] shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
