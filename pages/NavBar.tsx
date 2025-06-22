import React from 'react';
import { SiGmail, SiGithub, SiLinkedin, SiTiktok, SiWhatsapp } from 'react-icons/si';


export default function NavBar() {
  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center">
        <div className="bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-full flex items-center space-x-6 shadow-2xl border border-gray-700 animate-glow-nav">
            <a href="mailto:sinebour63@gmail.com" className="text-2xl text-red-500 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-bounce-gentle">
                <SiGmail />
            </a>
            <a href="https://github.com/Boursine233" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:-rotate-3 animate-bounce-gentle-delay-1">
                <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/bour-sine-fall-811651248/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-bounce-gentle-delay-2">
                <SiLinkedin />
            </a>
            <a href="https://www.tiktok.com/@boursinefall?_t=ZM-8xQ6VLbS5tF&_r=1" target="_blank" rel="noopener noreferrer" className="text-2xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:-rotate-3 animate-bounce-gentle-delay-3">
                <SiTiktok />
            </a>
            <a href="https://wa.me/qr/X3RWMBMUC5VYD1" target="_blank" rel="noopener noreferrer" className="text-2xl text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-bounce-gentle-delay-4">
                <SiWhatsapp />
            </a>
        </div>
    </div>
  )
}
