import React from 'react'

const Teamsitem = ({name, title, caption}) => {
    return(
        <ul className='flex flex-col md:flex-row relative border-l border-stone-200'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-lg md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'> {name} </span>
                    <span className='text-lg font-semibold text-[#001b5e]'> {title} </span>
                </p>
                <p className='my-2 text-base font-normal text-stone-500 '> {caption} </p>
            </li>
        </ul>
    )
}

export default Teamsitem