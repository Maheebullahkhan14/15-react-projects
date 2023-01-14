import { useState } from "react"
import React from 'react'


const List = ({title , info}) => {
    const [showinfo ,setshowinfo] = useState(false)
   
  return (
    <div className="List">
    <h3>{title}</h3> 

    <button className="plus" onClick={() => setshowinfo(!showinfo)}>

      {showinfo ? '-' : '+'}
    </button>

      {
          showinfo && <p className='para'>{info}</p>
      }
    
    
  </div>
    
  )
}

export default List
