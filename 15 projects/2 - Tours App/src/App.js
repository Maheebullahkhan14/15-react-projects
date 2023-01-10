import './App.css';
import AllTours from './AllTours';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading , setLoading] = useState(true)
  const [Tours ,setTours] = useState([])

  const fecthdata = async () =>{
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    setLoading(false)
  }

  const removeTour = (id) =>{
    const newTours = Tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() =>{
      fecthdata()
  }, [])

  if(loading){
    return(
      <Loading/>
    )
  }
  if(Tours.length === 0){
    return(
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fecthdata}>Refresh</button>
      </main>
    )
  }
  return (
    <AllTours Tours = {Tours} removeTour = {removeTour} />
  );
}

export default App;
