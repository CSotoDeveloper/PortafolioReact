import React from 'react';
import emailIcon from "../assets/emailIcon.png";
import githubIcon from "../assets/githubIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";

export default function Contact() {
  return (
    <footer id='contact' className='z-40 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className=' max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-blue-500'>Contactame</h2>
            <div className='flex space-x-7 justify-center'>
              <a href="https://www.linkedin.com/in/carlos-soto-gamez" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedinIcon} alt="LinkedIn" className='h-12 w-12' />
              </a>
              <a href="https://github.com/CSotoDeveloper" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground/80'>
                <img src={githubIcon} alt="GitHub" className='h-12 w-12' />
              </a>
              <a href="mailto:carlos.a.soto.gamez@gmail.com" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground/80'>
                <img src={emailIcon} alt="Email" className='h-12 w-12' />
              </a>
            </div>
            <h3 className='text-white font-semibold my-3 text-xl'>CSoto Dev - 2024</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
