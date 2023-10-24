import './Event.css'
import React from "react";
import Carousel from '../Carousel/Carousel'
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'

import slide_image_1 from '../../assets/images/img_1.webp';
import slide_image_2 from '../../assets/images/img_2.webp';
import slide_image_3 from '../../assets/images/img_3.webp';
import slide_image_4 from '../../assets/images/img_4.webp';
import slide_image_5 from '../../assets/images/img_5.webp';


const Event = ({ navigate }) => {

    const technicalEvent = [<img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' />]
    const nonTechnicalEvent = [<img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' />, <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' />]

    return (
        <div className='event' id='event'>
            <div className='event__container'>
                {/* <h2 className='event__title'>Events</h2>
                <p className='event__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe assumenda vel est nam, officiis doloribus sapiente minus nobis, at ad incidunt. Ipsum ab voluptatibus dolorem nemo quidem soluta alias voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse laboriosam nisi explicabo eligendi distinctio tempora, possimus repudiandae nobis repellat optio dolor consequuntur ipsa recusandae eaque neque animi quis! Ipsam.</p> */}
                <motion.h3 variants={fadeIn("right", "ease", 0, 1)} className='event__sub__title'>Technical Events</motion.h3>
                <Carousel elements={technicalEvent} navigate={navigate} />
                <motion.h3 variants={fadeIn("right", "ease", 0, 1)} className='event__sub__title'>Non - Technical Events</motion.h3>
                <Carousel elements={nonTechnicalEvent} navigate={navigate} />
            </div>
        </div>
    )
}

export default Event