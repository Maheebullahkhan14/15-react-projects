import React from 'react'
import Tour from './Tour'

const AllTours = ({Tours, removeTour}) => {
    
  return (
    <>
        <div className='ToursData'>
            {
                Tours.map((tour) =>{
                    return (
                        <Tour key={tour.id} tour= {tour} removeTour={removeTour}/>
                    )
                })
            }

        </div>
    </>
  )
}

export default AllTours
