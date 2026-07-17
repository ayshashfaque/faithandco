import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const canvasRef = useRef(null);
    const glowRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const glowPos = useRef({ x: 0, y: 0 });
    
    useEffect(() => {
        if (window.innerWidth < 1024) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrame;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.speedY = Math.random() * 0.6 - 0.3;
                this.color = '#C9A84C';
                this.opacity = 0.4;
                this.life = 1.0;
                this.decay = 0.015;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
                this.opacity = this.life * 0.4;
            }

            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update canvas particles
            particles.current.forEach((p, i) => {
                p.update();
                p.draw();
                if (p.life <= 0) particles.current.splice(i, 1);
            });

            // Update glow position (spring-like lag)
            const dx = mouse.current.x - glowPos.current.x;
            const dy = mouse.current.y - glowPos.current.y;
            glowPos.current.x += dx * 0.1;
            glowPos.current.y += dy * 0.1;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${glowPos.current.x - 150}px, ${glowPos.current.y - 150}px, 0)`;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            
            for (let i = 0; i < 1; i++) {
                particles.current.push(new Particle(e.clientX, e.clientY));
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    if (window.innerWidth < 1024) return null;

    return (
        <>
            {/* Glowing Aura trailing behind the cursor */}
            <div 
                ref={glowRef}
                className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9998] transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)',
                  willChange: 'transform',
                }}
            />
            {/* Canvas Particle Trail */}
            <canvas 
                ref={canvasRef} 
                className="fixed inset-0 pointer-events-none z-[9999]"
                style={{ mixBlendMode: 'screen' }}
            />
        </>
    );
};

export default CursorTrail;
