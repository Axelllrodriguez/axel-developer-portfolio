import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-white mb-2">Axel Rodriguez</h3>
            <p className="text-gray-400 text-sm">Software Developer</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-music-2"
              >
                {/* TikTok placeholder icon */}
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>© 2025 — Creado por <a href="https://high-impact-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">High Impact Studio</a></p>
        </div>
      </div>
    </footer>
  );
};
