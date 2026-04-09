import { motion } from 'motion/react';
import { Dna, Microchip, Globe2 } from 'lucide-react';

export default function Truths() {
  const truths = [
    {
      icon: Dna,
      title: 'Biogenética',
      description: 'La reescritura del código humano. Ya no estamos limitados por la selección natural, sino por los límites de nuestra propia imaginación y fronteras éticas.',
    },
    {
      icon: Microchip,
      title: 'Superinteligencia Artificial',
      description: 'El surgimiento de un intelecto inmensamente más inteligente que los mejores cerebros humanos en prácticamente todos los campos, incluyendo la creatividad científica, la sabiduría general y las habilidades sociales.',
    },
    {
      icon: Globe2,
      title: 'La Convergencia',
      description: 'Cuando la evolución biológica se encuentra con la singularidad tecnológica. La fusión de la conciencia humana con la infraestructura digital crea un nuevo paradigma de existencia.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-6 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white">Verdades Irrefutables</h2>
        <p className="font-mono text-sm tracking-widest text-[#00f0ff] uppercase">Los Cimientos del Mañana</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {truths.map((truth, index) => {
          const Icon = truth.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel p-8 flex flex-col items-start hover:border-[#00f0ff] transition-colors duration-500 group"
            >
              <div className="p-4 rounded-full bg-[rgba(112,0,255,0.1)] border border-[rgba(112,0,255,0.3)] mb-8 group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} className="text-[#00f0ff]" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">{truth.title}</h3>
              <p className="text-gray-400 leading-relaxed font-sans">
                {truth.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
