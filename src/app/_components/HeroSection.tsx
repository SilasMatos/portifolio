'use client'

import React, { useRef } from 'react'

import Button from '../../components/ui/Button'
import Particles from '../../components/Particles/Particles'
import hero_image from '@/assets/hero-image.png'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <section
      className="hero-section h-full min-h-screen overflow-hidden flex items-center justify-center container mx-auto relative text-white py-20 px-6"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#cf4d1a', '#ff8b3e']}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <div className="container mx-auto relative z-10 flex items-center ">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Desenvolvedor Full Stack
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Ao longo dos anos, participei de diversos projetos robustos, tanto
            na parte de back-end quanto front-end, o que me permitiu adquirir
            uma visão abrangente e aprimorar minhas habilidades técnicas. Sempre
            fui motivado pela resolução de problemas.
          </p>
          <Button text="">Curriculo</Button>
        </div>
        <div>
          <Image src={hero_image} alt="Hero Image" className="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
