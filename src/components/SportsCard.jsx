import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const SportsCard = ({item}) => {
    const {darkTheme} = useContext(UserContext)
  return (
   
        <div className={`shadow-[0px_4px_8px_0px_#0000000D] p-2 ${darkTheme? 'bg-[#3B3E47]':'bg-white'}`}>
            {!item.ad? ( 
            <>
                   <div>
                   <img src={item.img} alt="" />
               </div>
               <div className={`text-[17px] font-medium leading-[20.57px] text-left mt-3 ${darkTheme&&'text-white'}`}>
                   {item.title}
               </div>
               <div className={`flex justify-between mt-4 pl-2 pr-10 py-2 ${darkTheme? 'bg-[#292B32]':'bg-[#d8d8e3]'}`}>
                   <div>
                       <h5 className={darkTheme ? 'text-[#DFDFDF]' : 'text-[#525965]'}>Total Events</h5>
                       <span className={`text-sm font-medium leading-[16.94px] text-left ${darkTheme&&'text-white'}`}>{item.total_events}</span>
                   </div>
                   <div>
                       <h5 className={darkTheme ? 'text-[#DFDFDF]' : 'text-[#525965]'}>Sport</h5>
                       <span className={`text-sm font-medium leading-[16.94px] text-left ${darkTheme&&'text-white'}`}>{item.sport}</span>
                   </div>
               </div>
               </>
            ):(
                <>
                <div className='relative'>
                    <img src={item.img} alt="" />
                    <button className='text-[12.8px] font-bold leading-[19px] pl-[15px] pr-[15px] py-[3px] bg-black text-white absolute top-0 right-0'>Add</button>
                </div>
                <div className='border-[0.2px] border-solid border-[#006555] pb-16'>
                    <div className={`text-xl font-semibold leading-[24.2px] text-center mt-7 ${darkTheme && 'text-white'}`}>
                    {item.title}
                </div >
                    <p className={`text-[12.8px] font-normal leading-[19px] text-left max-w-[190px] mt-[9px] mb-0 mx-auto  ${darkTheme && 'text-[#DFDFDF]'}`}>{item.subtitle}</p>
                </div>
                
                
                </>
            )}
     
    </div>
  )

}

export default SportsCard