'use client'
import React, { useRef } from 'react'
import VariableProximity from '../../components/VariableProximity/VariableProximity'
import StarBorder from '../../components/StarBorder/StarBorder'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <section className="hero-section text-white py-20 px-6">
      <div className="container mx-auto">
        <span className="text-2xl md:text-4xl font-bold mb-6 text-accent">
          &lt;&gt;
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Desenvolvedor <br />
          <span className="">Full Stack</span>
        </h1>
        <span className="text-2xl md:text-4xl font-bold mb-6 text-accent">
          &lt;/&gt;
        </span>
        <VariableProximity
          label="Ao longo dos anos, participei de diversos projetos robustos, tanto na parte de back-end quanto front-end, o que me permitiu adquirir uma visão abrangente e aprimorar minhas habilidades técnicas. Sempre fui motivado pela resolução de problemas."
          fromFontVariationSettings="'wght' 300"
          toFontVariationSettings="'wght' 700"
          containerRef={containerRef}
          radius={100}
          falloff="gaussian"
          className="inline-block"
        />
      </div>
    </section>
  )
}

export default HeroSection
