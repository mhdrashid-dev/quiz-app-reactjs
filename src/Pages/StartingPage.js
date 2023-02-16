import React,{useEffect} from 'react'
import Logo from '../Images/quiz.png'
import { useNavigate } from 'react-router-dom'

function StartingPage() {

  let navigate=useNavigate();

  let LoadSetupPage=()=>{
    navigate('/setup');
  }

  useEffect(()=>{
    setTimeout(LoadSetupPage,2000)
  },[])

  return (
    <div className='bw-full h-screen bg-[rgba(12,18,33)]'>      
      <div className="container w-full h-full mx-auto flex flex-col justify-center items-center">
        <div className="logo  h-1/2 w-1/2 flex justify-center items-end my-5">
          <div className='h-1/2  rounded-3xl p-10 relative'>
            <div className='w-full h-full bg-[rgba(255,255,255,0.12)] rounded-full animate-ping absolute top-0 left-0'></div>            
            <img className='object-cover h-full z-50 ' src={Logo} alt="" />
          </div>
        </div>
        <div className="heading h-1/2 w-1/2 flex justify-center items-center pl-5 text-center">
          <h1 className='text-[rgba(128,142,162)]  text-[.5rem] md:text-[.7rem] lg:text-[.6rem] xl:text-[.7rem] font-montserrat'>To learn you have to listen, <br /> to improve you have to try</h1>
        </div>
      </div>
    </div>
  )
}

export default StartingPage
