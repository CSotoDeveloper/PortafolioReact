import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef(null);  // Para detectar clics fuera del menú

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0 overflow-hidden'>
      <div className='max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
          <a href="#home" className='mr-6 flex items-center space-x-2'>
            <p className='ml-10 text-blue-500 font-bold text-xl'> {`{ CSoto Dev }`}</p>
          </a>
          <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
            <a href="#about" className=' hover:text-blue-500 transition duration-200'>Acerca de mi</a>
            <a href="#experience" className='hover:text-blue-500 transition duration-200'>Experiencia</a>
            <a href="#education" className='hover:text-blue-500 transition duration-200'>Educacion</a>
            <a href="#projects" className='hover:text-blue-500 transition duration-200'>Proyectos</a>
            <a href="#contact" className='hover:text-blue-500 transition duration-200'>Contacto</a>
          </nav>
        </div>
        <button type='button' className='inline-flex items-center justify-center rounded-md md:hidden' onClick={() => setMobileOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className='h-6 w-6 aria-hidden="true"' />
          ) : (
            <Menu className='h-6 w-6 aria-hidden="true"' />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div ref={mobileMenuRef}className='sm:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col text-blue-400 items-end'>
            <button type='button' onClick={() => setMobileOpen(!mobileMenuOpen)}><a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50 hover:text-gray-900'>Acerca de mi</a></button>
            <button type='button' onClick={() => setMobileOpen(!mobileMenuOpen)}><a href="#experience" className='block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50 hover:text-gray-900'>Experiencia</a></button>
            <button type='button' onClick={() => setMobileOpen(!mobileMenuOpen)}><a href="#education" className='block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50 hover:text-gray-900'>Educación</a></button>
            <button type='button' onClick={() => setMobileOpen(!mobileMenuOpen)}><a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50 hover:text-gray-900'>Proyectos</a></button>
            <button type='button' onClick={() => setMobileOpen(!mobileMenuOpen)}><a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50 hover:text-gray-900'>Contacto</a></button>
          </div>
        </div>
      )}
    </header>
  )
}
