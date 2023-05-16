import React from 'react'
import Projectitem from './Projectitem'
import webdevImg from '../assets/web-dev.jpg'
import mobiledevImg from '../assets/mobile-dev.jpg'
import gamedevImg from '../assets/game-dev.jpg'
import cybersecImg from '../assets/cyber-sec.jpg'
import cloudcompImg from '../assets/cloud-comp.jpg'



const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
            <h1 className='text-4xl font-bold text-center text-[#001b5e]' > Projects </h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque doloremque quod fugit asperiores, ab sed modi eum minima inventore?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
              <Projectitem img={webdevImg} title='Web Development'/>
              <Projectitem img={mobiledevImg} title='Mobile Development'/> 
              <Projectitem img={gamedevImg} title='Game Development'/> 
              <Projectitem img={cybersecImg} title='Cyber Security'/>
              <Projectitem img={cloudcompImg} title='Cloud Computing'/> 
              <Projectitem img={webdevImg} title='Web Development'/>  
            </div>
        </div>
    )
}

export default Projects