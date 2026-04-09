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
      <div className="glass-panel px-6 py-3 flex items-center gap-8 rounded-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-[#00f0ff]' : ''} />
              <span className="font-mono text-xs tracking-widest uppercase">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.05)]"
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
