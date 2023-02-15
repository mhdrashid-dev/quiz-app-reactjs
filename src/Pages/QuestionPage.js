import React from 'react'

function QuestionPage() {
  return (
    <div className='w-full h-screen bg-[rgba(12,18,33)] p-5 lg:px-36 2xl:px-80'>
      <div className="container mx-auto w-full h-full bg-[rgba(30,41,59)] rounded-md flex flex-col justify-around items-center relative">
        <div className="question-sec  w-full px-2 absolute top-4 left-3 lg:left-0 ">
          <h1 className='text-[rgba(55,175,229)] text-sm font-bold'>1/10</h1>
        </div>
        <div className="question-sec px-2">
          <h1 className='text-center text-[#fefefe] font-montserrat text-sm md:text-base font-bold 2xl:text-xl'>In DuckTales, what is the name of the city where all the main characters live?</h1>
        </div>
        <div className="answers w-full p-2 ">
          <h1 className='my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer hover:bg-[rgba(55,175,229)] duration-200 enabled:bg-[rgba(55,175,229)] text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Duckwing</h1>
          <h1 className='my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer hover:bg-[rgba(55,175,229)] duration-200 enabled:bg-[rgba(55,175,229)] text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Tailspin</h1>
          <h1 className='my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer hover:bg-[rgba(55,175,229)] duration-200 enabled:bg-[rgba(55,175,229)] text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Wingford</h1>
          <h1 className='my-4 xl:my-8 py-2 w-full md:w-2/3 2xl:w-1/2 cursor-pointer hover:bg-[rgba(55,175,229)] duration-200 enabled:bg-[rgba(55,175,229)] text-[#fefefe] md:mx-auto text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Duckburg</h1>
        </div>
        <div className="next-question">
          <button className='bg-[rgba(55,175,229)] text-white px-3 py-1 rounded-md font-bold'>Next Question</button>
        </div>
      </div>      
    </div>
  )
}

export default QuestionPage
