import React from 'react'


const Modal = ({open, closeW}) => {

   

  return (
    <div className={`flex absolute h-[100vh] justify-center items-center inset-0 transition-colors ${open ? "visible" : "hidden" }  bg-black/20 `}>
       <div className={`bg-white relative rounded-xl shadow p-6 transition-all scale-100 opacity-100 text-center max-w-[300px] `} >
       <i className="fa-solid fa-trash-can text-[50px] text-red-500 block mb-3"></i>
        <p className='text-[32px] text-black-500 ' >Confirm Delete</p>
        <p className=' text-[20px] text-slate-500 mb-3 ' >Are you sure you want to delete this item ?</p>
        <div className='flex gap-5 justify-center '>
       <button onClick={closeW} className='text-[22px] py-1 px-4 rounded-lg border  font-semibold bg-red-500  text-white shadow '  >Delete</button>
       <button onClick={closeW} className='text-[22px] py-1 px-4 rounded-lg border  font-semibold text-slate-400 bg-white  shadow '  >Cancel</button>

        </div>
       <i  onClick={closeW}  class=" cursor-pointer absolute top-4 right-4 fa-solid fa-xmark text-[28px] font-bold text-slate-500"></i>
       </div>
    </div>
  )
}

export default Modal