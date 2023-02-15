import React from 'react'

function Result() {
  return (
    <div className='w-full h-screen bg-[rgba(12,18,33)]'>
      <div className="container mx-auto w-full h-full text-white flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold my-5'>Welldone !</h1>
        <h1 className='my-5 text-5xl font-bold'>81%</h1>  
        <h1 className='text-center my-5  text-[rgba(255,255,255,.3)]'>" Success is not a Final. <br /> Failiure is not a Fatal, <br /> It is the courage to Continue That Counts "</h1>            
        <button className='bg-[rgba(55,175,229)] px-3 py-1 rounded-md font-bold my-5'>Start New Question</button>                
      </div>
    </div>
  )
}

export default Result
