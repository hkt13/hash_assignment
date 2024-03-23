import { useState } from 'react'
import Sports from './components/Sports'
import SpotLight from './components/SpotLight'
import UserContext from './utils/UserContext'

function App() {
  const [toogle, setToogle] = useState(false)

const HandleClick=()=>{
  setToogle(!toogle)
}
  return (
    <>
    <UserContext.Provider value={{darkTheme:toogle}}>
    <div className={`px-12 py-8 relative ${toogle ? 'bg-[#292B32]':'bg-[#F7F7F8]'}`}>
    <button className='bg-[#000000] text-white font-semibold text-lg p-2 mb-5 fixed left-[45%] top-2.5' onClick={HandleClick}>Toogle me</button>
    <Sports/>
    <SpotLight/>
  </div>
    </UserContext.Provider>
  
    </>
  )
}

export default App
