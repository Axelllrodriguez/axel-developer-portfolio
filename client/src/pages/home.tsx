import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Globe, 
  Smartphone,
  Terminal,
  Cpu,
  Mail
} from "lucide-react";
import gymMockup from "@assets/generated_images/modern_gym_website_dashboard_mockup.png";
import realEstateMockup from "@assets/generated_images/modern_real_estate_website_mockup.png";

// Simple, clean skill component
const SkillBadge = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-md border border-border/50 hover:border-border transition-colors">
    <Icon className="w-4 h-4 text-foreground" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

// Project Card - Minimalist
const ProjectCard = ({ title, desc, link, img, tags }: { title: string, desc: string, link: string, img: string, tags: string[] }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="overflow-hidden rounded-lg bg-secondary/20 border border-border transition-all duration-300 hover:border-foreground/20">
      <div className="aspect-video overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-muted-foreground mb-6 line-clamp-2">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="container mx-auto px-6 max-w-5xl pt-32 pb-24">
        
        {/* Header / Hero - Inspired by benscott.dev & safetpojskic.com */}
        <section className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Disponible para nuevos proyectos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Construyendo productos <br className="hidden md:block" />
              digitales, marcas y experiencias.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Hola, soy <span className="text-foreground font-semibold">Axel Rodriguez</span>. Un Desarrollador de Software especializado en crear experiencias web accesibles, perfectas y de alto rendimiento.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="h-12 px-8 rounded-full text-base font-medium"
              >
                Ver Proyectos
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 md:mb-32">
          <div className="border-t border-border pt-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold">Habilidades Técnicas</h2>
              </div>
              <div className="md:col-span-3">
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Desarrollo Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                      <SkillBadge icon={Code2} name="React.js" />
                      <SkillBadge icon={Layout} name="TypeScript" />
                      <SkillBadge icon={Globe} name="Next.js" />
                      <SkillBadge icon={Smartphone} name="Tailwind CSS" />
                      <SkillBadge icon={Layout} name="Framer Motion" />
                      <SkillBadge icon={Globe} name="HTML5 & CSS3" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Backend y Herramientas</h3>
                    <div className="flex flex-wrap gap-3">
                      <SkillBadge icon={Server} name="Node.js" />
                      <SkillBadge icon={Database} name="PostgreSQL" />
                      <SkillBadge icon={Database} name="MongoDB" />
                      <SkillBadge icon={Terminal} name="Git & GitHub" />
                      <SkillBadge icon={Cpu} name="Docker" />
                      <SkillBadge icon={Globe} name="Vercel" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="projects" className="mb-24 md:mb-32">
          <div className="border-t border-border pt-16">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
              <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
              <a href="#" className="text-sm font-medium hover:underline flex items-center gap-1">
                Ver todos los proyectos <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="ProFitness Web"
                desc="Una plataforma integral de fitness que integra horarios de clases, gestión de membresías y perfiles de entrenadores."
                link="https://profitnesspagina.vercel.app/"
                img={gymMockup}
                tags={["React", "Tailwind", "Framer Motion"]}
              />
              <ProjectCard 
                title="Farias Real Estate"
                desc="Plataforma inmobiliaria moderna con filtrado avanzado, integración de mapas y recorridos virtuales."
                link="https://fariasyfarias.vercel.app/"
                img={realEstateMockup}
                tags={["Next.js", "TypeScript", "PostgreSQL"]}
              />
            </div>
          </div>
        </section>

        {/* Agency Mini-Section */}
        <section className="mb-24 md:mb-32">
          <div className="bg-secondary/20 rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Fundador de High Impact Studio</h3>
                <p className="text-muted-foreground mb-6">
                  Lidero un equipo de creativos y desarrolladores creando productos digitales de alto impacto para negocios en todo el mundo.
                </p>
                <Button asChild variant="outline" className="bg-background">
                  <a href="https://high-impact-studio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visitar Web de la Agencia
                  </a>
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-lg bg-background">
                 <iframe 
                    src="https://high-impact-studio.vercel.app/" 
                    className="w-full h-full border-0 pointer-events-none"
                    title="High Impact Studio Preview"
                    loading="lazy"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="border-t border-border pt-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Trabajemos juntos</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  ¿Tenés un proyecto en mente? Actualmente estoy disponible para trabajos freelance y nuevas oportunidades.
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="mailto:hello@axelrodriguez.dev" 
                    className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    hello@axelrodriguez.dev
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    Conectar en LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="bg-secondary/10 p-8 rounded-xl border border-border">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre</label>
                      <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="juan@ejemplo.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Contame sobre tu proyecto..."></textarea>
                  </div>
                  <Button className="w-full rounded-full h-12 text-base">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
