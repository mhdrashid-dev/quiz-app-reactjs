import React,{useContext, useEffect, useState} from 'react'
import { GlobalState } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import Loading from '../Components/Loading';


function QuestionPage() {

  let {setCorrectResult,limit}=useContext(GlobalState);
  let [data,setData]=useState([]);
  let [firstIndex,setFirstIndex]=useState(0);
  let [lastIndex,setLastIndex]=useState(1);  
  let [isLoading,setIsLoading] =useState(false);
  let [orders,setOrders]=useState([]); 
  let sort=[1,2,3,4];
  let navigate=useNavigate();


  


  let LoadNextQuestion=()=>{
    if(lastIndex<limit){           
      setIsLoading(true);
      setFirstIndex((prev)=>{return prev+1});
      setLastIndex((prev)=>{return prev+1});
      setTimeout(()=>{
        setIsLoading(false);
      },200)
    }else{
      setIsLoading(true);
      setTimeout(()=>{
        navigate('/result')
      },2000)
      
    }   
    
  }
  
  let RightAnswer=()=>{
    setCorrectResult((prev)=>{return prev+1});
    LoadNextQuestion();
  }
  
  useEffect(()=>{    
    setOrders(()=>{      
      return sort.sort(function(){return Math.random()-0.5})
    })
  },[firstIndex])  
  
 
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('data')));  
  },[])


  return (
    <>
    {isLoading===false ? 
    <>
      <div className='w-full h-screen bg-[rgba(12,18,33)] p-5 lg:px-36 2xl:px-80'>
        <div className="container mx-auto w-full h-full bg-[rgba(30,41,59)] rounded-md flex flex-col justify-around items-center relative">
          <div className="question-sec  w-full px-2 absolute top-4 left-3 lg:left-0 ">
            <h1 className='text-[rgba(55,175,229)] text-sm font-bold'>{lastIndex}/{limit}</h1>
          </div>
          {
             data.slice(firstIndex,lastIndex).map((item,key)=>{
              return(
                <>
                  <div  className="question-sec px-2">
                    <h1  className='text-center text-[#fefefe] font-montserrat text-sm md:text-base font-bold 2xl:text-xl'>{item.question}</h1>
                  </div>
                  <div className="answers w-full p-2 flex flex-col justify-center items-center">
                    <a className={`my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer duration-200 select-none  text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px]  border-[rgba(255,255,255,.5)]`} style={{order:`${orders[0]}`}} onClick={RightAnswer}>{item.correct_answer}</a>
                    <a className={`my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer duration-200 select-none  text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px]  border-[rgba(255,255,255,.5)]`} style={{order:`${orders[1]}`}} onClick={LoadNextQuestion} >{item.incorrect_answers[0]}</a>
                    <a className={`my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer duration-200 select-none  text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px]  border-[rgba(255,255,255,.5)]`} style={{order:`${orders[2]}`}} onClick={LoadNextQuestion} >{item.incorrect_answers[1]}</a>
                    <a className={`my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer duration-200 select-none  text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px]  border-[rgba(255,255,255,.5)]`} style={{order:`${orders[3]}`}} onClick={LoadNextQuestion} >{item.incorrect_answers[2]}</a>
                  </div>
                </>
              )
             })
            }         
          <div className="next-question">
            <button className='bg-[rgba(55,175,229)] text-white px-3 py-1 rounded-md font-bold' onClick={LoadNextQuestion} >Next Question</button>
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

export default QuestionPage
