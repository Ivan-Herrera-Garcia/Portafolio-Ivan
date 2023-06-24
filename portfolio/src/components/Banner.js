import React,{useEffect} from 'react';
import logo from "../assets/Logo.png";
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion";
import {fadeIn} from '../variants';
import cv from "./../utils/CV.pdf"

const Banner = () => {
  let url = `https://comentario.onrender.com/`;
  //La api originalmente cuenta con paginado de 10 pokemon por pagina y hasta la fecha de 09/06/2023 son
  //1008 pokemons en total

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once:false, amount:0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[85px]'>
            IVAN HERRERA <span>GARCIA</span>
            </motion.h1>
            <motion.div 
               variants={fadeIn('up', 0.3)} 
               initial='hidden' 
               whileInView={'show'} 
               viewport={{once:false, amount:0.7}} 
               className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Soy</span>
              <TypeAnimation sequence={[
                'Desarrollador Web',
                2000,
                'Desarrollador Movil',
                2000,
                'Tecnico en Informatica',
                2000,
                'Spiderman',
                2000,
              ]} speed={10} 
              className='text-accent' 
              wrapper='span'
              repeat={Infinity}/>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0 text-[20px]'>
            Soy un profesional apasionado por la tecnología y la innovación, con habilidades técnicas y personales que me permiten ser un valioso miembro de equipo.
            </p>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once:false, amount:0.7}}>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a className='text-gradient btn-link' href={cv}>Mi CV</a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
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
          <motion.div  
               variants={fadeIn('down', 0.3)} 
               initial='hidden' 
               whileInView={'show'} 
               viewport={{once:false, amount:0.7}} 
               className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[1000px] mx-auto'>
            <img className='mx-auto' width={1000} src={logo} alt=''/>
          </motion.div>
          
        </div>
      </div>
    </section>
    );
};

export default Banner;
