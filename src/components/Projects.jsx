import React from 'react'
import projects from "../data/projects";
import Card from './Card';

export function Projects() {
  return (
    <div className='' id='projects'>
      <div className='py-12'>
        <div className='relative py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center pb-10'>
          <h2 className='text-center border-blue-900 text-base text-blue-600 font-semibold tracking-wide uppercase'>Proyectos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight uppercase text-gray-900 sm:text-4xl">
              REACT FrontEnd</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projects.map((project) => (
              <Card key={project.title} item={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
