import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Home = () => {
    return (
        <div id='home'> 
            <img 
            className="w-full h-screen object-cover object-left scale-x-[-1]" 
            src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='/'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> Hi, welcome to Infinte Learning </h1>
                <h2 className='flex sm:text-3xl text-2xl'> 
                <TypeAnimation
                    sequence={[
                        '#anyoneanything', // Types '#anyoneanything'
                        2000, // Waits 2s
                        '#anyonecancode', // Deletes '#anyoneanything' and types '#anyonecancode'
                        2000, // Waits 2s
                        '#thisisus', // Types 'Three' without deleting 'Two'
                        2000,
                        () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Home