import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/94752520376?text=Hi%20Moonbox%20Digital!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-110 shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)]"
    >
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow opacity-40" />
      <MessageCircle size={26} className="text-white relative z-10 fill-white" />
    </a>
  );
}
