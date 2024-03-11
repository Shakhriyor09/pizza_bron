import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] absolute bg-slate-200/30">
      <div className='loader bg-slate-200/30'></div>
    </div>
  )
}

export default Loader