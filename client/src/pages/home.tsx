import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink, MessageCircle, Calendar } from "lucide-react";
import gymMockup from "@assets/generated_images/modern_gym_website_dashboard_mockup.png";
import realEstateMockup from "@assets/generated_images/modern_real_estate_website_mockup.png";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-white/20">
      <BackgroundBeams />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight">
                Desarrollo software moderno que <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">convierte visitantes en clientes</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                Creamos páginas web, aplicaciones y sistemas a medida para negocios que buscan escalar, diferenciarse y vender más.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 text-base h-12"
                  onClick={() => scrollToSection("#contact")}
                >
                  Agendar llamada
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 text-base h-12 border-white/20 hover:bg-white/10 hover:text-white"
                  onClick={() => scrollToSection("#projects")}
                >
                  Ver proyectos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                <img 
                  src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764303488/Webaxel_-_1_gtpzmg.png" 
                  alt="Axel Rodriguez" 
                  className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decor elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 block">Sobre mí</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Software Developer certificado por Digital House, Globant y Mercado Libre
              </h2>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Mi nombre es <strong className="text-white">Axel Rodriguez</strong>, tengo 24 años y soy de Córdoba, Argentina.
                </p>
                <p>
                  Me especializo en el desarrollo de <strong className="text-white">páginas web, aplicaciones y sistemas profesionales a medida</strong>, enfocados en resolver problemas reales y generar resultados concretos para negocios y emprendedores.
                </p>
                <p>
                  Actualmente soy estudiante universitario de la <strong className="text-white">Tecnicatura en Desarrollo de Software del ISPC (Córdoba)</strong>, combinando formación académica con experiencia práctica en proyectos reales.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agency Section */}
        <section id="agency" className="py-24 bg-white/5 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 block">Mi Agencia</span>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">High Impact Studio</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Trabajo junto a mi equipo en <strong>High Impact Studio</strong>, una agencia enfocada en crear productos digitales de alto impacto: sitios web que venden, aplicaciones escalables y software a medida para empresas.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Te invito a conocer nuestra web y descubrir cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
                </p>
                <Button 
                  asChild
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12"
                >
                  <a href="https://high-impact-studio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visitar High Impact Studio <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-background aspect-video">
                  <iframe 
                    src="https://high-impact-studio.vercel.app/" 
                    className="w-full h-full border-0 pointer-events-none"
                    title="High Impact Studio Preview"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 block">Portfolio</span>
                <h2 className="text-3xl md:text-5xl font-bold font-display">Proyectos destacados</h2>
              </div>
              <Button variant="outline" className="rounded-full border-white/20">
                Ver todos los proyectos
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <a href="https://profitnesspagina.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-6">
                    <img 
                      src={gymMockup} 
                      alt="Web Gimnasio" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver proyecto <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-white/80 transition-colors">Web Gimnasio</h3>
                  <p className="text-gray-400">Diseño moderno para centro de fitness con integración de horarios.</p>
                </a>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group cursor-pointer"
              >
                <a href="https://fariasyfarias.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-6">
                    <img 
                      src={realEstateMockup} 
                      alt="Web Inmobiliaria" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver proyecto <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-white/80 transition-colors">Web Inmobiliaria</h3>
                  <p className="text-gray-400">Plataforma elegante para visualización de propiedades y contacto.</p>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-white/5 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 block">Testimonios</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display">Lo que dicen mis clientes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors"
                >
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    "Excelente trabajo. Axel entendió perfectamente lo que necesitábamos y entregó una web que superó nuestras expectativas. La comunicación fue fluida y el resultado impecable."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                      C{i}
                    </div>
                    <div>
                      <h4 className="font-bold font-display">Cliente {i}</h4>
                      <p className="text-xs text-gray-500 uppercase">CEO, Empresa {i}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">Trabajemos juntos</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                ¿Querés una página web, app o sistema que realmente funcione para tu negocio?
                <br className="hidden md:block" />
                Agendá una llamada o escribime directamente y vemos cómo ayudarte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-lg w-full sm:w-auto"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar llamada
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/50 w-full sm:w-auto transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
