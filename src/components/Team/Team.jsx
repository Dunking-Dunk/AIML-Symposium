import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import img from '../../assets/images/img_2.webp'
import Carousel from '../Carousel/Carousel'

const Team = () => {
    const coordinator = [<Card name='hursun' designation='coordinator' image={img} />, <Card name='hursun' designation='coordinator' image={img} />, <Card name='hursun' designation='coordinator' image={img} />]

    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Coordinators</h3>
                <Carousel elements={coordinator} />
                <h3 className='team__title'>Organisers</h3>
                <Carousel elements={coordinator} />
            </div>
        </div>
    )
}

export default Team