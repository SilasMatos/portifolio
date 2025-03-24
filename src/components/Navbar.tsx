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
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
