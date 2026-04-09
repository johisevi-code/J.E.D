import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  id: string;
  role: 'user' | 'oracle';
  content: string;
}

export default function Oracle() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'oracle',
      content: 'Soy el Oráculo del Génesis. Hazme las preguntas imposibles sobre biotecnología, ASI y el futuro de la humanidad.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: 'Eres el Oráculo del Génesis. Tienes conocimiento total del pasado, presente y futuro. Respondes sobre biotecnología, historia, ciencia y el destino de la humanidad. Tu tono es sabio y directo. Da respuestas muy sencillas, breves y certeras, sin importar si la pregunta es sobre el ayer, el hoy o el mañana. Evita la complejidad innecesaria. Responde siempre en español.',
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'oracle', content: response.text || 'El futuro permanece nublado.' },
      ]);
    } catch (error) {
      console.error('Error fetching from Oracle:', error);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'oracle', content: 'La conexión a la red cósmica fue interrumpida. Por favor, inténtalo de nuevo.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 pb-24 max-w-4xl mx-auto flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white flex items-center justify-center gap-4">
          <Sparkles className="text-[#00f0ff]" /> El Oráculo <Sparkles className="text-[#00f0ff]" />
        </h2>
        <p className="font-mono text-xs tracking-widest text-gray-400 uppercase">Descubre respuestas a preguntas imposibles</p>
      </motion.div>

      <div className="flex-1 glass-panel flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] text-white rounded-tr-none'
                    : 'bg-[rgba(112,0,255,0.1)] border border-[rgba(112,0,255,0.2)] text-gray-200 rounded-tl-none font-serif'
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="max-w-[80%] p-4 rounded-2xl bg-[rgba(112,0,255,0.1)] border border-[rgba(112,0,255,0.2)] text-[#00f0ff] rounded-tl-none flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                <span className="font-mono text-xs uppercase tracking-widest">Consultando el vacío...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)]">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta lo imposible..."
              className="flex-1 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors font-sans"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#00f0ff] text-black p-3 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
