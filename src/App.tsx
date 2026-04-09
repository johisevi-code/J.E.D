/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Truths from './components/Truths';
import Oracle from './components/Oracle';
import Visions from './components/Visions';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <>
      <div className="atmosphere" />
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {currentTab === 'home' && <Home setCurrentTab={setCurrentTab} />}
            {currentTab === 'truths' && <Truths />}
            {currentTab === 'oracle' && <Oracle />}
            {currentTab === 'visions' && <Visions />}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(10,15,30,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-gray-400 pointer-events-none">
        <Fingerprint size={14} className="text-[#00f0ff]" />
        <span className="font-mono text-[10px] tracking-widest uppercase">Marca de agua SynthID</span>
      </div>
    </>
  );
}
