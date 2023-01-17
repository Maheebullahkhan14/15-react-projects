import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const url = 'https://course-api.com/react-tabs-project'

  const [jobs ,setjobs] = useState([])
  const [value , setvalue] = useState(0)
  const [Loading ,setLoading] = useState(true)

  const fetchapi = async() =>{
    const response = await fetch(url)
    const newdata = await response.json()
    console.log(newdata)
    setjobs(newdata)
    setLoading(false)

  }

  useEffect ( () =>{
    fetchapi()
    
  }, [])

  if(Loading){
    return (
      <section>
        <h2>Loading....</h2>
      </section>
    )
  }

  const { company ,dates , id ,title , duties} = jobs[value]
  return (
    <section className='main'>
      {
        jobs.map((item , index) =>{
          return (
            <button key={item.id} onClick= {() => setvalue(index)}
            className={`job-title ${index === value && 'active'}`}
            >{item.company}</button>
          )
        })
      }
      <article>
        <h3>{title}</h3>
        <h4>{dates}</h4>

        {
          duties.map((duty) =>{
            return (
              <li>{duty}</li>
            )
          })
        }
      </article>
    </section>
  );
}


export default App;
