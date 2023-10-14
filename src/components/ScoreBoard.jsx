import React from 'react'

const ScoreBoard = ({ xScore, oScore }) => {
  return (
      <div className='flex justify-center items-center gap-10 mb-3 text-xl font-semibold'>
      <span className='bg-[#242489c1] text-white  px-7 py-1'>X-{xScore} </span>
      <span className='bg-[#242489c1] text-white px-7 py-1'>O-{oScore}</span>
    </div>
  )
}

export default ScoreBoard