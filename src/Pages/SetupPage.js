import React, { useState } from 'react'

function SetupPage() {
  
  let [categoryValue,setCategoryValue]=useState('General knowledge');
  let [categoryActive,setCategoryActive]=useState(false);    
  let [modeValue,setModeValue]=useState('Easy');
  let [modeActive,setModeActive]=useState(false);
  let [limit,setLimit]=useState(10);

  let setUserCategory=(e)=>{
    setCategoryValue(e);
    setCategoryActive(false);
    setModeActive(false)
  }
  let setUserMode=(e)=>{
    setModeValue(e);
    setCategoryActive(false);
    setModeActive(false)
  }


  return (
    <div className='w-full h-screen bg-[rgba(12,18,33)] p-5 lg:px-56 xl:px-64  lg:flex lg:justify-center lg:items-center'>
      <div className="container mx-auto w-full h-full lg:h-5/6 xl:h-3/4 border-2 border-[rgba(255,255,255,.18)] rounded-lg 2xl:w-2/4">
        <div className="content w-full h-full flex flex-col justify-around items-center">
          <div className="heading text-center">
            <h1 className='font-montserrat text-white'>What you need?</h1>
          </div>
          <div className="form-sec  px-3 md:w-2/3 lg:w-1/2 mx-auto 2xl:w-3/4">
            <form action="" className=''>
              <label className='w-full text-[rgba(255,255,255,.4)] text-sm' htmlFor="">Number of Questions</label>
              <input className='w-full bg-[rgba(255,255,255,.18)] text-white rounded-md py-1 mb-8 px-2' value={limit} type="number" onInput={(e)=>{setLimit(e.target.value)}}/>
              <label className='w-full text-[rgba(255,255,255,.4)] text-sm' htmlFor="">Category</label>              
              <div className='relative'>
                <li className='w-full bg-[rgba(255,255,255,.18)] text-white list-none py-1 px-2 rounded-md mb-8 cursor-pointer select-none' onClick={()=>{setCategoryActive(!categoryActive);setModeActive(false)}} >{categoryValue}</li>
                <ul className={`${categoryActive===false ? 'hidden' : 'block'} absolute top-10 left-0 w-full h-[20vh] overflow-y-scroll bg-[rgba(30,41,59)] text-white z-10 rounded-md lg:scrollbar-thumb-sky-500 lg:scrollbar-track-transparent lg:scrollbar-thin`}>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>General Knowledge</li>
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Books</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Filim</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Music</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Video Games</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Nature & Science</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Computer science</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Mythology</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Sports</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Geography</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>History</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Celebrities</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Animals</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Vehicles</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' onClick={(e)=>{setUserCategory(e.target.innerHTML)}}>Comics</li>                  
                </ul>
              </div>
              <label className='w-full text-[rgba(255,255,255,.4)] text-sm relative' htmlFor="">Mode</label>    
              <div className='relative'>
                <li className='w-full bg-[rgba(255,255,255,.18)] text-white list-none py-1 px-2 rounded-md mb-8 cursor-pointer select-none' onClick={()=>{setModeActive(!modeActive);setCategoryActive(false)}}>{modeValue}</li>
                <ul className={` ${modeActive===false ? 'hidden' : 'block'} absolute top-10 left-0 w-full h-[10vh] overflow-y-scroll bg-[rgba(30,41,59)] text-white z-10 rounded-md lg:scrollbar-thumb-sky-500 lg:scrollbar-track-transparent lg:scrollbar-thin`} >                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' onClick={(e)=>{setUserMode(e.target.innerHTML)}}>Easy</li>
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' onClick={(e)=>{setUserMode(e.target.innerHTML)}}>Medium</li>                  
                  <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' onClick={(e)=>{setUserMode(e.target.innerHTML)}}>Hard</li>                                             
                </ul>
              </div>                                     
            </form>
          </div>
          <div className="start-btn-sec">
            <button className='bg-[rgba(55,175,229)] px-5 py-1 rounded-md text-white font-semibold'>Start To Quiz</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SetupPage
