import React from 'react';

import CountUp from "react-countup";

import {useInView} from "react-intersection-observer";

import {motion} from "framer-motion";

import {fadeIn} from "../variants";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });

  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

        </motion.div>
        <motion.div 
         variants={fadeIn('left',0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'>Acerca de mi.</h2>
          <h3 className='h3 mb-2'>Actualmente estoy por egresar del TECNM Campus la Laguna y estoy realizando mi residencia profesional en Propiedades Mexico</h3>
          <p className='mb-6'>Cuentos con mas de 30 proyectos en la plataforma de GitHub y he participado en diversos eventos de programacion, el mas reciente
          fue el Hackaton Banorte en Mty, Nuevo Leon</p>
          <br/>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-semibold text-gradient mb-2'>
              { inView ?  <CountUp start={0} end={23} duration={3}/> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Años<br/>de edad
            </div>
          </div>
          <div>
            <div className='text-[40px] font-semibold text-gradient mb-2'>
              { inView ?  <CountUp start={0} end={35} duration={3}/> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Proyectos<br/>Completados
            </div>
          </div>
          <div>
            <div className='text-[40px] font-semibold text-gradient mb-2'>
              { inView ?  <CountUp start={0} end={10} duration={3}/> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Asistido a<br/>Eventos y Competencias
            </div>
          </div>
        </div>
          <div className='flex gap-x-8 items-center'>
          <a href='https://github.com/Ivan-Herrera-Garcia'>
              <FaGithub/>
            </a>
            <a href='https://www.linkedin.com/in/ivan-herrera-garcia-8b64411b8/'>
              <FaLinkedin/>
            </a>
            <a href='https://www.instagram.com/bellkhen/'>
              <FaInstagram/>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
