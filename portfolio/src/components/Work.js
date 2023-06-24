import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import Anime from "../assets/Animes.png";
import Api from "../assets/Api.png";
import Pokemon from "../assets/Pokemon.png"; 
import python from "../assets/python.png";
import gtp from "../assets/gpt.png";




const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <motion.div  variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div >
            <h2 className='h2 leading-tight text-accent'>Mis ultimos proyectos<br/>personales.</h2>
            {/* Se puede cambiar la altura con mb-16 y tomando en cuenta el texto */}
            <p className='max-w-sm mb-4'>
              Ademas de estar realizando mi residencia profesional, tengo tiempo para seguir estudiando y mejorar mis habilidades de logica y programacion.
              Estos son unos pocos de los proyectos que estoy desarrollando, unos son propios y otros son colaboraciones entre amigos 
            </p>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
          
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Anime} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Fullstack</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>App en React + Api Zoro</span>
              </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
          
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={gtp} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>OpenAi + GTP4ALL</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Utilizando Python mas las librerias de OpenAi puedes tener 
              tu propio ChatGPT a tu disposicion en local</span>
              </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
          
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Api} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Backend</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Cree una API con c#, Node.js y MongoDB Atlas.</span>
              </div>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
          
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Pokemon} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Fullstack</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>App en React + Api Pokemon</span>
              </div>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
          
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={python} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'>
              <span className='text-gradient'>Python</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2x1 text-white'>Como lo dice en la imagen, he hecho diversos pequeños proyectos con Python</span>
              </div>
          </div>
        
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Work;
