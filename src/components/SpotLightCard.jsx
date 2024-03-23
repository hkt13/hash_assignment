import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const SpotLightCard = ({item}) => {
  const {darkTheme} = useContext(UserContext)
  return (
    
    <div className={`flex flex-col justify-center items-center p-[9px] ${darkTheme ? 'shadow-[0px_10px_20px_0px_#00000033] border-[Mixed] border-solid border-[#818A97] bg-[#3B3E47]' : 'shadow-[0px_8px_16px_0px_#0000001A] border-[Mixed] border-solid border-[#A9ACB2]'}`}>
        <div><img src={item.img} alt="" /></div>
        <div className={`text-[17px] font-medium leading-[26.52px] ${darkTheme && 'text-white'}`}>{item.title}</div>
        <div className={`text-sm font-normal leading-[21px] flex gap-1 mt-1 ${darkTheme && 'text-white'}`}>
            <span>{item.venue_time.date}</span>|
            <span>{item.venue_time.day}</span>|
            <span>{item.venue_time.time}</span>
        </div>
        <div className={`max-w-[212px] text-sm font-normal leading-[20.58px] text-center text-[#525965] mt-1 ${darkTheme && 'text-[#DFDFDF]'}`}>{item.venue_place}</div>
        <button className='text-[12.73px] font-medium leading-[15.41px] bg-[#1d1d1f] text-white p-3 mt-2 w-[80%]'>{item.highlight}</button>
    </div>
  )
}

export default SpotLightCard;