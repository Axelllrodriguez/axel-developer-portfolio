import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TechBackground = () => {
    const [isDark, setIsDark] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Detectar cambios de tema
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    // Animación de partículas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        // Crear partículas
        const particleCount = isDark ? 80 : 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * (isDark ? 0.3 : 0.2),
                vy: (Math.random() - 0.5) * (isDark ? 0.3 : 0.2),
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Color de partículas según tema
                const color = isDark ? '100, 100, 255' : '100, 100, 150';
                ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Conectar partículas cercanas
                particles.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const maxDistance = isDark ? 150 : 120;
                    if (distance < maxDistance) {
                        const opacity = isDark ? 0.1 : 0.08;
                        ctx.strokeStyle = `rgba(${color}, ${opacity * (1 - distance / maxDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [isDark]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradiente de fondo */}
            <div className={`absolute inset-0 ${isDark
                    ? 'bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950'
                    : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100'
                }`} />

            {/* Grid tecnológico */}
            <div
                className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-[0.07]'}`}
                style={{
                    backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(100, 100, 255, 0.1)' : 'rgba(100, 100, 150, 0.3)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(100, 100, 255, 0.1)' : 'rgba(100, 100, 150, 0.3)'} 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Canvas de partículas */}
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 ${isDark ? 'opacity-60' : 'opacity-70'}`}
            />

            {/* Círculos decorativos animados */}
            <motion.div
                className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/10'
                    }`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: isDark ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/10'
                    }`}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: isDark ? [0.5, 0.3, 0.5] : [0.4, 0.2, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/10'
                    }`}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Overlay para contraste */}
            <div className={`absolute inset-0 ${isDark ? 'bg-slate-950/80' : 'bg-white/40'
                }`} />
        </div>
    );
};

