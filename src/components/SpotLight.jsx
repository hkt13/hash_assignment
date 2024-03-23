import React, { useContext } from 'react'
import { data } from '../data/spotlight_data'
import SpotLightCard from './SpotLightCard';
import UserContext from '../utils/UserContext';
const SpotLight = () => {
  const {darkTheme} = useContext(UserContext)
  console.log(darkTheme)
  return (
    <div className='flex gap-4 flex-col items-center mt-16'>
      <h1 className={`text-[50px] font-bold leading-[52.5px] ${darkTheme&& 'text-white'}`}>Collection Spotlight</h1>
      <p className={`max-w-[864px] opacity-[0px] text-sm font-normal leading-[22.65px] text-center ${darkTheme&& 'text-white'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <div className='flex gap-8'>
        {data.map((item,index)=>(
          <SpotLightCard item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default SpotLight;