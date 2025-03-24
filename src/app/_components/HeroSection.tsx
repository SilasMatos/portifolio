'use client'

import React, { useRef } from 'react'
import VariableProximity from '../../components/VariableProximity/VariableProximity'
import StarBorder from '../../components/StarBorder/StarBorder'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <section className="hero-section text-white py-20 px-6" ref={containerRef}>
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <VariableProximity
            label="Desenvolvedor Full Stack"
            fromFontVariationSettings="'wght' 100"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
            className="inline-block"
          />
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          <VariableProximity
            label="Ao longo dos anos, participei de diversos projetos robustos, tanto na parte de back-end quanto front-end, o que me permitiu adquirir uma visão abrangente e aprimorar minhas habilidades técnicas. Sempre fui motivado pela resolução de problemas."
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 700"
            containerRef={containerRef}
            radius={100}
            falloff="gaussian"
            className="inline-block"
          />
        </p>
        <StarBorder as="a" href="#contact" className="mt-4">
          Curriculo
        </StarBorder>
      </div>
    </section>
  )
}

export default HeroSection
