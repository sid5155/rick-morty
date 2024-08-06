import { useState, useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const CardsDetail = () => {
    let {id} = useParams()

    let [fetchedData, setFetchedData] = useState([])
    let {name, image, location, origin, gender, species, status, type} = fetchedData

    
    let api = `https://rickandmortyapi.com/api/character/${id}`

    // fetch character when api url changes
    useEffect(() => {
        (async function(){
          let data = await fetch(api)
          .then((res) => res.json())
          setFetchedData(data);
        })();
      }, [api])

  return (
    <div className='container d-flex justify-content-center'>
         <div className='flex-column d-flex gap-3'>
            <h1 className='text-center'> {name}</h1>
            <img src={image} alt='' className='img-fluid'/>
            {(()=> {

                if(status === 'Dead'){
             return (<div className=  'badge bg-danger fs-5'> {status}</div>)

                }
                else if(status=== 'Alive'){
                    return(
                        <div className= 'badge bg-success fs-5' > {status}</div>
                    )
                }
                else{
                    return(
                        <div className= 'badge bg-dark fs-5' > {status}</div>
                    )
                }
        })()}

        <div className='content'>
        <div className=''>
            <span className='fw-bold'> Gender - </span>
            {gender}
        </div>
        <div className=''>
            <span className='fw-bold'> Species - </span>
            {species}
        </div>
        <div className=''>
            <span className='fw-bold'> Type - </span>
            {type=== "" ? "Not Available" : type}
        </div>
        <div className=''>
            <span className='fw-bold'> Origin - </span>
            {origin?.name}
        </div>
        <div className=''>
            <span className='fw-bold'> Location - </span>
            {location?.name}
        </div>

        </div>
            </div>
            </div>
  )
}

export default CardsDetail