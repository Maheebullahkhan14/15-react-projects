import React, { useState } from 'react'

const Tour = ({tour , removeTour}) => {
    const {id ,image ,info ,name , price} = tour
    const [Readmore , setReadmore] = useState(false)
  return (
    <>
        <div className='Tour'>
            <img src={image}></img>
            <div className='Details'>
            <div className='header'>
                <h3>{name}</h3>
                <span>$ {price}</span> </div>
                <p>
                {Readmore ? info : `${info.substring(0,200)}...` }
                </p> 
                <span onClick={() => setReadmore(!Readmore)}>
                {Readmore ? 'show less ' : 'Read More'}</span>
            </div>
            <button className='Remove' onClick={() => removeTour(id)}>Not interested</button>
        </div>
    </>
  )
}

export default Tour
