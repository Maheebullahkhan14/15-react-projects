import React, { useState } from 'react'
import people from './data'

const Review = () => {
    const [index , setindex] = useState(0)
    const {id , name , job , image , text} = people[index]

    const checkNumber = (number) =>{
        if(number > people.length - 1){
            return 0
        }
        else if(number < 0 ){
            return people.length -1
        }
        return number
    }

    const prevIndex = () =>{
        setindex((index) =>{
           let newIndex = index - 1
           return checkNumber(newIndex)
        })
    }

    const nextIndex = () =>{
        setindex((index) =>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const randomIndex = () =>{
        let random = Math.floor (Math.random() * people.length)
        if(random === index){
            random = index + 1
            setindex(random)
        }
        setindex(random)
    }

  return (
    <div className='Review' key={id}>
        <img src={image}></img>
        <h4>{name}</h4>
        <h5>{job}</h5>
        <p>
     {text}
    </p>
    <span><i class="fa-solid fa-chevron-left" onClick={() => prevIndex()}></i></span>
    <span> <i class="fa-solid fa-chevron-right"
    onClick={() => nextIndex()}></i> </span>
    <div>
    <button onClick={() => randomIndex()}>Surprise Me</button>
    </div>
    </div>
  )
}

export default Review
