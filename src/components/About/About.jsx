import './About.css'
import React from "react";
import logo from '../../assets/logo.png'
import { textVariant, slideIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>

                <div className='about__card'>
                    <motion.div variants={slideIn("left", "ease", 0, 1)} className='about__card__img__container'>
                        <img src={logo} className='about__card__img' />
                    </motion.div>

                    <div className='about__card__sub'>
                        <motion.h3 className='about__card__title' variants={textVariant()}>INNOVENTZZ'23</motion.h3>
                        <motion.p className='about__card__para' variants={textVariant()}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore, exercitationem aut quam dolores voluptas veniam blanditiis architecto similique odio sapiente magnam nihil recusandae quisquam dicta at odit alias ut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora, sit molestias fugiat in debitis voluptas vitae aperiam doloremque! Sint fugit quo velit similique quidem officiis ullam odio at quibusdam?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam iste eveniet natus laborum repellendus doloribus sapiente deserunt excepturi repudiandae, ratione accusamus libero quos eos, minima nobis ipsa repellat obcaecati!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore, exercitationem aut quam dolores voluptas veniam blanditiis architecto similique odio sapiente magnam nihil recusandae quisquam dicta at odit alias ut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora, sit molestias fugiat in debitis voluptas vitae aperiam doloremque! Sint fugit quo velit similique quidem officiis ullam odio at quibusdam?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam iste eveniet natus laborum repellendus doloribus sapiente deserunt excepturi repudiandae, ratione accusamus libero quos eos, minima nobis ipsa repellat obcaecati!
                        </motion.p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default sectionWrapper(About)