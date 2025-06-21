'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  ExternalLink,
  Instagram
} from 'lucide-react'

function Contacts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '10%',
      transition: { duration: 1.2, ease: 'easeInOut' }
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      url: 'https://github.com/silasmatos',
      color: 'hover:bg-gray-700',
      description: 'Meus projetos e códigos',
      stats: ''
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      url: 'https://www.linkedin.com/in/silas-matos/',
      color: 'hover:bg-blue-600',
      description: 'Carreira profissional',
      stats: ''
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://www.instagram.com/silasmatos1',
      color: 'hover:bg-accent',
      description: 'Acompanhe meu dia a dia',
      stats: ''
    }
  ]

  const handleSocialClick = (url: string, name: string) => {
    if (name === 'Email') {
      window.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section
      id="contato"
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            <div
              className={`w-full h-full rounded-full ${
                i % 2 === 0
                  ? 'animate-star-movement-bottom'
                  : 'animate-star-movement-top'
              }`}
            />
          </div>
        ))}
      </div>

      {hoveredIndex !== null && (
        <div
          className="fixed w-32 h-32 pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            background:
              'radial-gradient(circle, rgba(246, 97, 53, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-[#F66135]/10 text-[#F66135] text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Entre em contato
          </motion.span>
          <h2 className="text-4xl font-bold text-[#ededed] mb-6">Contatos</h2>

          <motion.div
            className="w-10 h-1 bg-[#F66135] mx-auto rounded-full mb-8"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />

          <p className="max-w-2xl mx-auto text-[#ededed]/80">
            Aqui você encontra meus principais canais de contato e redes
            sociais. Fique à vontade para me chamar, conectar ou acompanhar meu
            trabalho!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSocialClick(social.url, social.name)}
            >
              <div
                className={`
                  relative bg-foreground border border-gray-800 rounded-2xl p-8 
                  transition-all duration-500 ease-out transform
                  ${
                    hoveredIndex === index
                      ? 'scale-105 -translate-y-4'
                      : 'hover:scale-102'
                  }
                  group-hover:border-accent group-hover:shadow-2xl
                  group-hover:shadow-accent/20
                `}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`
                        w-16 h-16 rounded-xl flex items-center justify-center
                        bg-background text-accent transition-all duration-300
                        ${social.color}
                        group-hover:text-white group-hover:scale-110
                        group-hover:rotate-12
                      `}
                    >
                      {social.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {social.name}
                  </h3>

                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {social.description}
                  </p>
                </div>
              </div>

              <div
                className={`
                  absolute inset-0 rounded-2xl border-2 border-accent/30
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                  ${hoveredIndex === index ? 'animate-ping' : ''}
                `}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-foreground border border-gray-800 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Não encontrou o que procurava?
              </h3>
              <p className="text-gray-400 mb-4">
                Entre em contato direto comigo através do email
              </p>
              <a
                href="mailto:silasmatosym@gmail.com"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
