import React, { useState ,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import { GlobalState } from '../Context/Context';
import axios from 'axios'

function SetupPage() {
  
  let {limit,setLimit}=useContext(GlobalState);
  let [categoryValue,setCategoryValue]=useState('General knowledge');
  let [categoryActive,setCategoryActive]=useState(false);    
  let [data,setData]=useState(false);
  let [modeValue,setModeValue]=useState('Easy');
  let [modeActive,setModeActive]=useState(false);  
  let [category,setCategory]=useState(9);
  let [mode,setMode]=useState('easy');
  let navigate=useNavigate();
  let [isLoading,setIsLoading]=useState(false);  



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

  let GetData=()=>{    
    axios.get(`https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${mode}&type=multiple`).then((response)=>{    
      localStorage.setItem('data',JSON.stringify(response.data.results));       
      setData(true); 
    })
  }

  let DataHandler=()=>{    
    setIsLoading(true);
    GetData();

  }

  useEffect(()=>{   
    if(data!==false){
      navigate('/question');
    }
  },[data])


  useEffect(()=>{    
    window.addEventListener('load',()=>{
      navigate('/')
    })
  },[])  

 
    
 
 

  return (    
    <>
    {isLoading!==true ?
      <>
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
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={9} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>General Knowledge</li>
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={10} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Books</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={11} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Filim</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={12} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Music</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={15} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Video Games</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={17} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Nature & Science</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={18} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Computer science</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={20} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Mythology</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={21} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Sports</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={22} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Geography</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={23} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>History</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={26} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Celebrities</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={27} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Animals</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={28} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Vehicles</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2' value={29} onClick={(e)=>{setUserCategory(e.target.innerHTML);setCategory(e.target.value)}}>Comics</li>                  
                    </ul>
                  </div>
                  <label className='w-full text-[rgba(255,255,255,.4)] text-sm relative' htmlFor="">Mode</label>    
                  <div className='relative'>
                    <li className='w-full bg-[rgba(255,255,255,.18)] text-white list-none py-1 px-2 rounded-md mb-8 cursor-pointer select-none' onClick={()=>{setModeActive(!modeActive);setCategoryActive(false)}}>{modeValue}</li>
                    <ul className={` ${modeActive===false ? 'hidden' : 'block'} absolute top-10 left-0 w-full h-[10vh] overflow-y-scroll bg-[rgba(30,41,59)] text-white z-10 rounded-md lg:scrollbar-thumb-sky-500 lg:scrollbar-track-transparent lg:scrollbar-thin`} >                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' id='easy' onClick={(e)=>{setUserMode(e.target.innerHTML);setMode(e.target.attributes[1].nodeValue)}}>Easy</li>
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' id='medium' onClick={(e)=>{setUserMode(e.target.innerHTML);setMode(e.target.attributes[1].nodeValue)}}>Medium</li>                  
                      <li className='hover:bg-[rgba(55,175,229)] px-3 text-sm py-2 select-none' id='hard' onClick={(e)=>{setUserMode(e.target.innerHTML);setMode(e.target.attributes[1].nodeValue)}}>Hard</li>                                             
                    </ul>
                  </div>                                     
                </form>
              </div>
              <div className="start-btn-sec">
                <button className='bg-[rgba(55,175,229)] px-5 py-1 rounded-md text-white font-semibold' onClick={DataHandler} >Start To Quiz</button>
              </div>
            </div>        
          </div>
        </div>
      </>
      :
      <Loading></Loading>
      }
    </>
  )
}

export default SetupPage
