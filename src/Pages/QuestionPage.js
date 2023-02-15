import React from 'react'

function QuestionPage() {
  return (
    <div className='w-full h-screen bg-[rgba(12,18,33)] p-5'>
      <div className="container mx-auto w-full h-full bg-[rgba(30,41,59)] rounded-md flex flex-col justify-around items-center">
        <div className="question-sec px-2">
          <h1 className='text-center text-[#fefefe] font-montserrat text-sm font-bold'>In DuckTales, what is the name of the city where all the main characters live?</h1>
        </div>
        <div className="answers w-full p-2 ">
          <h1 className='my-4 py-2 w-full text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Duckwing</h1>
          <h1 className='my-4 py-2 w-full text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Tailspin</h1>
          <h1 className='my-4 py-2 w-full text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Wingford</h1>
          <h1 className='my-4 py-2 w-full text-center bg-[rgba(51,65,85)] rounded-md border-[1px] border-[rgba(255,255,255,.5)]'>Duckburg</h1>
        </div>
        <div className="next-question">
          <button className='bg-cyan-500 text-white px-3 py-1 rounded-md'>Next Question</button>
        </div>
      </div>      
    </div>
  )
}

export default QuestionPage
