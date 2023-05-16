import React from 'react'
import Teamsitem from './Teamsitem'

const data = [
    {
        name: 'Capt Ari Nugrahanto ',
        title: 'Program Director',
        caption: 'Great things never came from comfort zone' 
    },
    {
        name: 'Mba Mery Simanjuntak',
        title: 'Head of Operational',
        caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis consequatur. Soluta illo optio dolor neque accusantium error cupiditate?'
    },
    {
        name: 'Ka Sri Andeani ',
        title: 'Head of Mentor',
        caption: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta fugit dolorem, placeat suscipit quas alias dignissimos dolorum. At numquam corporis eligendi doloremque, repellat nobis illo. Deserunt nisi ab earum cupiditate!' 
    },    
    {
        name: 'Ka Indra Rukmana',
        title: 'Head of IT&Network',
        caption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, veniam.' 
    },  
]
const Teams = () => {
    return(
        <div id='teams' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='mb-6 text-4xl font-bold text-center text-[#001b5e]'> Teams </h1>
            {data.map((item, idx) => (
                <Teamsitem key={idx} name={item.name} title={item.title} caption={item.caption}/>
            
            ))}
        </div>
    )
}

export default Teams