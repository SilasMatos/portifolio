import React from 'react'
import RotatingText from './RotatingText/RotatingText'

const Navbar: React.FC = () => {
  return (
    <nav className=" text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-bold">SILAS MATOS</h1>
          <div className="bg-accent px-3 py-2 rounded-md ">
            <RotatingText
              texts={['Desenvolvedor', 'Full Stack']}
              rotationInterval={3000}
              mainClassName="text-xl font-bold"
            />
          </div>
        </div>
        <ul className="flex space-x-6 text-white font-medium text-lg">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
