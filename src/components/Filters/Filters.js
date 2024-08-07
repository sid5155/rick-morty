import React from 'react'
import Status from './Category/Status'
import Species from './Category/Species'
import Gender from './Category/Gender'


const Filters = ({setStatus, setPageNumber, setSpecies,  setGender}) => {

  return (
    <div className='col-lg-2 col-12'>
      <div className='text-left fw-bols fs-4 mb-2'>

        Filters

        </div>
       
        <div className="accordion" id="accordionExample">
          <Status setPageNumber= {setPageNumber} setStatus={setStatus}/>
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
          <Gender setGender= {setGender} setPageNumber= {setPageNumber} />
    

        </div>
        </div>
  )
}

export default Filters

