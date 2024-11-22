import React from 'react';
import cvPdf from "../assets/cv.pdf";
import correoIcon from "../assets/emailIcon.png";
import githubIcon from "../assets/githubIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import mePhoto from "../assets/me.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import typeScriptIcon from "../assets/typescript.png";


export function Hero() {
  return (
    <section id='home'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between px-6    ">
          <div className="md:w-1/2 flex flex-col space-y-4 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">Hola, <br />Soy Carlos <span className="text-blue-500">Soto</span></h1>
            <p className="md:text-2xl text-xl mb-4"><span className='font-semibold text-blue-500'>Front End Developer</span>  & Analista de Datos</p>
            <p className="mb-4">Me especializo en desarrollar interfaces web interactivas y optimizadas, utilizando  <span className='font-semibold text-blue-500'>React, TypeScript y Tailwind</span>. Además, aplico mi experiencia como analista de datos para transformar información en soluciones visuales y estratégicas. Mi enfoque combina creatividad, funcionalidad y datos para ofrecer experiencias únicas en cada proyecto.</p>
            <a className='w-max ' href={cvPdf} target='_blank' rel='noreferrer '>
            <button type='button' className="bg-black text-white px-3 py-2 w-max rounded-md hover:scale-110 transition ease-in-out duration-200">
              Ver CV
            </button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center relative">
            <img src={mePhoto} alt="Me" className="sm:h-96 sm:w-96 object-cover md:border-[1px] border-blue-500 rounded-full" />
            <img src={reactIcon} alt="" className='absolute w-10 top-20 right-5 sm:hidden' />
            <img src={typeScriptIcon} alt="" className='absolute w-10 left-2 rounded-lg sm:hidden' />
            <img src={tailwindIcon} alt="" className='absolute w-10 rounded-full bottom-20 right-11 sm:hidden' />
          </div>
          <div className="md:flex flex-col gap-6 bg-gray-200 p-4 rounded-full hidden border  ">
            <a href="https://github.com/CSotoDeveloper" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-12 sm:w-16 hover:scale-125 transition duration-300" />
            </a>
            <a href="mailto:carlos.a.soto.gamez@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={correoIcon} alt="Correo" className="w-12 sm:w-16 hover:scale-125 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/carlos-soto-gamez/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-12 sm:w-16 hover:scale-125 transition duration-300" />
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}
