import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-blue-500/5 py-4"
        : "bg-background/50 backdrop-blur-sm py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-lg font-bold tracking-tight"
        >
          Axel Rodriguez
          <span className="text-muted-foreground font-normal ml-2 hidden sm:inline-block">/ Software Developer</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <a href="https://github.com/Axelllrodriguez" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/axel-rodriguez-16b7a3261/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-foreground"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-6 pt-4 border-t border-border">
                <a href="https://github.com/Axelllrodriguez" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/axel-rodriguez-16b7a3261/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
