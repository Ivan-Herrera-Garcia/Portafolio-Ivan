import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Post from "./Post";
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./Comentarios.form"

const postController = new Post();

export function Contact(props) {

    const { post } = props;
    const formik = useFormik({
        initialValues: initialValues(post),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (!post) {
                  await postController.crearComentario(formValue);
                    console.log(formValue);
                } else {
                    console.log("Error en: "+post);
                }
            } catch (error) {
                console.error(error);
            }
        }
    })


  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>A un boton</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos<br/> Juntos!</h2>
          </div>
        </motion.div>

          <motion.form onSubmit={formik.handleSubmit}
            variants={fadeIn('left',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.3}}
            className=' post-form flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            type='text' id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            placeholder='Tu nombre'/> 
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            type='text' id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            placeholder='Tu email'/>
            <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
            placeholder='Tu mensaje' id="mensaje"
            onChange={formik.handleChange}
            value={formik.values.mensaje}
            error={formik.errors.mensaje}></textarea>
            <button className='btn btn-lg' type='submit' loading={formik.isSubmitting}  onClick={() => {
            alert("Mensaje enviado!");    }}
            >Enviar mensaje</button>
           
           <button className='btn btn-lg' type='submit' onClick={() => {
            formik.resetForm();    }}
            >Limpiar Formulario</button>
          </motion.form>
      </div>
    </div> 
  </section>
  );
};

export default Contact;
