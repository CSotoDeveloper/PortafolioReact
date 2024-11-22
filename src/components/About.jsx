import React from 'react'
import cssLogo from "../assets/css.png";
import excel from "../assets/excel.png";
import expressLogo from "../assets/express.png";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/js.png";
import mernLogo from "../assets/mern.png";
import mongoLogo from "../assets/mongo.webp";
import nodeLogo from "../assets/node.png";
import powerbi from "../assets/powerbi.webp";
import python from "../assets/python.png";
import reactLogo from "../assets/react.png";
import sqlserver from "../assets/sqlserver.png";
import tailwindLogo from "../assets/tailwind.png";
import typescriptLogo from "../assets/typescript.png";
import vbaLogo from "../assets/vba.png";

export default function About() {
  return (
    <div className='' id='about'>
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base text-blue-600 font-semibold tracking-wide uppercase'>Acerca de mi</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Ing. Industrial</p>
            <p className='text-start sm:text-center mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto'>
            Inicié mi carrera en <span className='text-blue-500 font-semibold'>Ingeniería en Sistemas Computacionales</span> ya que siempre estuve involucrado en informática. Sin embargo, debido a que no era lo que esperaba decidí cambiarme a <span className='text-blue-500 font-semibold'>Ingeniería Industrial</span>. A pesar del cambio, nunca dejé de programar, manteniendo mi interés por la tecnología y el <span className='text-blue-500 font-semibold'>Desarrollo de Software</span>.              </p>
          </div>
          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              <div>
                <h3 className="text-3xl font-semibold text-gray-900">Mi Transición</h3>
                <p className="mt-4 text-xl text-gray-600">
                De Ingeniero Industrial y Analista de Datos a <span className='text-blue-500 font-semibold'>Frontend Developer </span> ha sido impulsada por mi pasión por la programación y el diseño web. Descubrí que me encanta crear interfaces interactivas y funcionales que mejoren la experiencia de los usuarios. Este interés me llevó a dedicarme completamente al desarrollo web, aprendiendo y perfeccionando mis habilidades en <span className='text-blue-500 font-semibold'>React, TypeScript y Tailwind</span>. Con conocimientos en el MERN stack.</p>
                <img src={mernLogo} alt="Mern Stack" className=" w-60 mt-4 mx-auto " />
              </div>


              <div className='border border-blue-200 rounded-lg md:p7 flex flex-col gap-8 items-center shadow-lg shadow-blue-300'>
                <h3 className='text-2xl font-semibold justify-center flex-wrap gap-3 pt-5'>Tecnologías & Experiencia</h3>
                <div className='flex items-center justify-center flex-wrap gap-3'>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={htmlLogo} alt='htmlogo' className='w-9' />
                    <span className='font-semibold'>HTML</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={cssLogo} alt='cssLogo' className='w-9' />
                    <span className='font-semibold'>CSS</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={jsLogo} alt='JSLOGO' className='w-9 rounded-full' />
                    <span className='font-semibold'>JS</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={nodeLogo} alt='nodeLogo' className='w-9' />
                    <span className='font-semibold'>NodeJs</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={expressLogo} alt='expressLogo' className='w-9' />
                    <span className='font-semibold'>ExpressJs</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={mongoLogo} alt='sqlLogo' className='w-9' />
                    <span className='font-semibold'>SQL</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={reactLogo} alt='ReactLogo' className='w-9' />
                    <span className='font-semibold'>REACT</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={typescriptLogo} alt='typescriptLogo' className='w-9 rounded-full' />
                    <span className='font-semibold'>TypeScript</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={tailwindLogo} alt='TailwindLogo' className='w-9' />
                    <span className='font-semibold'>Tailwind</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={powerbi} alt='PowerBILogo' className='w-9' />
                    <span className='font-semibold'>PowerBI</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={vbaLogo} alt='VBALOGO' className='w-9' />
                    <span className='font-semibold'>VBA</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={python} alt='pythonLogo' className='w-9' />
                    <span className='font-semibold'>Python</span>
                  </div>
                  <div className='p-2 border border-blue-300 flex items-center mb-4 gap-1 w-max py-1 rounded-lg shadow-md shadow-blue-300'>
                    <img src={excel} alt='ExcelLogo' className='w-9' />
                    <span className='font-semibold'>Excel</span>
                  </div>



                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='text-3xl font-semibold text-gray-900'>Análisis de Datos</h3>
              <p className='mt-4  text-gray-600 text-xl'>
              Durante mi trayectoria como <span className='text-blue-500 font-semibold'>Analista de Datos</span>, trabajé con herramientas como <span className='text-blue-500 font-semibold'> Excel, SQL, Power BI y Python</span>. Estas herramientas me permitieron analizar, interpretar y presentar información de manera efectiva para la toma de decisiones. Este camino no solo fortaleció mis habilidades técnicas, sino que también me preparó para abordar problemas complejos en el <span className='text-blue-500 font-semibold up'>Desarrollo Web</span>.</p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <img src={excel} alt="EXCEL Stack" className=" w-12 h-12 object-contain" />
                <img src={sqlserver} alt="Sql Stack" className="w-12 h-12  object-contain" />
                <img src={powerbi} alt="Powerb iStack" className="w-12 h-12 object-contain" />
                <img src={python} alt="Python Stack" className=" w-12 h-12  object-contain" />
                <img src={vbaLogo} alt="VBA Stack" className=" size-14 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
