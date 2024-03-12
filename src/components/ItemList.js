import React, { useState } from 'react'
import ShowMenu from './ShowMenu'


const ItemList = ({menuItem}) => {

    const [showMenuItem, setShowMenuItem]= useState(false)

  function onClickHandle(){
    setShowMenuItem(!showMenuItem)
  }
  return (
    <div 
    
   key={menuItem?.card?.card?.title}
   className="m-1 p-2 flex justify-between border-2 border-solid border-blue-500 w-[700px] bg-blue-400 flex-col cursor-pointer"
 >
   <div className='flex justify-between'>
   <p className="m-2 p-2 text-2xl italic">{menuItem?.card?.card?.title}</p>
   {showMenuItem ? (
  <button onClick={onClickHandle} className='m-2 p-2'>^</button>
) : (
  <button onClick={onClickHandle} className='m-2 p-2 text-2xl'>+</button>
)}
   </div>
  <div className=' flex flex-col '>
 { showMenuItem && <ShowMenu menu={ menuItem?.card?.card?.itemCards} />}
  </div>
 </div>
  )
}

export default ItemList
