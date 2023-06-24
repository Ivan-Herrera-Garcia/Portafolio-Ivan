import React from 'react';
import {BsArrowUpRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";


const services = [
  {
    name: 'Tecnico en Informatica',
    description: 'Al ser egresado del CONALEP soy Tecnico en Informatica lo cual me sirve para realizar mantenimiento. Gracias a ello puedo hacer reparaciones a una diversa gama de dispositivos en mis tiempos libres',
    link: '#',
    enlace: ''
  },
  {
    name: 'Desarrollador Web',
    description: 'Actualmente estoy trabajando con C# .NET, React y Node.js. Para practicar desarrolle ejemplos de lo que hago, podran ver lo en GitHub',
    link: 'https://github.com/Ivan-Herrera-Garcia/',
    enlace: 'GitHub'
  },
  {
    name: 'Spiderman',
    description: 'Este es un secreto, pero tambien soy Spiderman',
    link: '',
    enlace: 'Spiderman'
  }

]


const Services = () => {
  return (
  <section className='section' id='services' >
    <div className='container mx-auto'>
      <motion.div className='flex flex-col lg:flex-row'  variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once:false, amount:0.7}} >
        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' style={{backgroundSize:`68%`}}>
          <h2 className='h2 text-accent mb-6'>Experiencia.</h2>
          <h3 className='h3 max-w-[445px] mb-16'>
            Te contare un poco de <br /> lo que hago dia a dia
          </h3>
            {/*<button className='btn btn-sm'>See my work</button>*/}
        </div>
        <div  className='flex-1'>
          <div>
             {services.map((service, index)=> {

              const {name, description, link, enlace} = service;

              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={`${link}`} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href={`${link}`} className='text-gradient text-sm'>
                    {enlace}
                    </a>
                  </div>
                </div>
              )
             })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Services;
