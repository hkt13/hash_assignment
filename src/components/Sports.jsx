import React, { useContext } from 'react'
import data from '../data/sports_data.js'
import SportsCard from './SportsCard.jsx'
import UserContext from '../utils/UserContext.js'
const Sports = () => {
  const {darkTheme} = useContext(UserContext)
  return (
    <div className='flex gap-4 flex-col'>
        <div className={`font-bold text-2xl leading-9 ${darkTheme ? 'text-white' : 'text-black'} `}>
          <span className='border-b-2 border-b-[#738FFF] border-[none] border-solid pb-1'>
             Sports
          </span>
           
        </div>
        <div className='flex gap-6'>
             {data.map((item, index)=>(
           <SportsCard item={item} key={index}/>
        ))}
        </div>
     
        <div className='text-center mt-4'>
             <button className='shadow-[0px_4px_8px_0px_#0000000D] bg-[#2c9cf0] text-white opacity-[0px] text-sm font-semibold leading-[25.89px] px-[30px] py-2.5 rounded-[3px_0px_0px_0px]'>
            See More
        </button>
        </div>
       
    </div>
  )
}

export default Sports;