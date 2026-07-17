import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const CursorTrail = () => {
    const canvasRef = useRef(null)
    const particles = useRef([])
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        if (!isHome || window.innerWidth < 1024) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrame

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resize)
        resize()

        class Particle {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.size = Math.random() * 3 + 1
                this.speedX = Math.random() * 1 - 0.5
                this.speedY = Math.random() * 1 - 0.5
                this.color = '#F1D592'
                this.opacity = 0.3
                this.life = 1.0
                this.decay = 0.02
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.life -= this.decay
                this.opacity = this.life * 0.3
            }

            draw() {
                ctx.globalAlpha = this.opacity
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.current.forEach((p, i) => {
                p.update()
                p.draw()
                if (p.life <= 0) particles.current.splice(i, 1)
            })
            animationFrame = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            for (let i = 0; i < 2; i++) {
                particles.current.push(new Particle(e.clientX, e.clientY))
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrame)
        }
    }, [isHome])

    if (!isHome) return null

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'screen' }}
        />
    )
}

export default CursorTrail
