import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TechBackground } from "@/components/ui/tech-background";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
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
  <div className="flex items-center gap-2 bg-secondary/70 backdrop-blur-sm px-4 py-2 rounded-md border border-border/50 hover:border-border transition-colors">
    <Icon className="w-4 h-4 text-foreground" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

// Project Card - Minimalist
const ProjectCard = ({ title, desc, link, img, tags }: { title: string, desc: string, link: string, img: string, tags: string[] }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="overflow-hidden rounded-lg bg-secondary/60 backdrop-blur-md border border-border transition-all duration-300 hover:border-foreground/20 hover:shadow-xl hover:shadow-blue-500/10">
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans relative">
      <TechBackground />
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

            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-24">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Construyo páginas webs, apps y softwares a medida para profesionalizar tu marca.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  Hola, soy <span className="text-foreground font-semibold">Axel Rodriguez</span>. Un Desarrollador de Software especializado en crear experiencias web accesibles, perfectas y de alto rendimiento.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection("#projects")}
                    className="h-11 px-6 rounded-full text-sm font-medium"
                  >
                    Ver Proyectos
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-11 w-11 rounded-full" asChild>
                      <a href="https://github.com/Axelllrodriguez" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="h-11 w-11 rounded-full" asChild>
                      <a href="https://www.linkedin.com/in/axel-rodriguez-16b7a3261/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl bg-secondary/10 border border-border/50">
                <img
                  src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764303488/Webaxel_-_1_gtpzmg.png"
                  alt="Axel Rodriguez"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
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
                    href="mailto:studiohighimpact@gmail.com"
                    className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    studiohighimpact@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/axel-rodriguez-16b7a3261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    Conectar en LinkedIn
                  </a>
                  <a
                    href="https://wa.link/ht65k9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chatear en WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-secondary/10 p-8 rounded-xl border border-border">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="9ce7d26a-3adf-47e8-984c-6243214004e8" />
                  <input type="hidden" name="subject" value="Nuevo mensaje desde Portfolio - Axel Rodriguez" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Contame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
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
