import React from 'react'

interface ButtonProps {
  text: string
  children?: React.ReactNode
}

function Button({ text, children }: ButtonProps) {
  return (
    <button className="rounded-xl py-3 px-4 border-2 border-accent text-white hover:bg-accent hover:text-white transition-colors">
      {text}
      {children}
    </button>
  )
}

export default Button
