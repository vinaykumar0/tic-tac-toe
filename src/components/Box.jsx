import React from 'react'

const Box = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";
  return (
      <button className={`${style} border w-[8rem] h-[8rem]`} onClick={onClick}>{value}</button>
  )
}

export default Box