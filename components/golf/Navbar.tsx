'use client'

import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/10 shadow-sm backdrop-blur' : 'bg-transparent'
    }`}>
      <nav className="px-8 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/static/images/golf/golf-logo.png" 
              alt="Golf Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className={`text-lg font-semibold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              {siteMetadata.headerTitle}
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {[
              { id: 'products', label: 'Products' },
              { id: 'founder', label: 'Team' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isScrolled 
                    ? 'text-black hover:text-green-600' 
                    : 'text-white hover:text-green-400'
                } transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}