import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards'
import Select from '../components/Filters/Category/Select'

const Location = () => {
  let [id, setID] = useState(1)
  let [linfo, setLinfo] = useState([])
  let [results, setResults] = useState([])
  let Api = `https://rickandmortyapi.com/api/location/${id}`
 
  let {type, name, dimension } = linfo

  useEffect(() => {

    (async function () {
      let data = await fetch(Api).then((res) => res.json())
      setLinfo(data)

      let Resident = await Promise.all(
        data.residents.map((total)=> {
          return fetch(total).then(res => res.json())
        })
      )
      setResults(Resident)
  })()

  },[Api])
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center mb-4'>
          Location : {name==="" ? "Not Available" : name}
        </h1>
        <h4 className='text-center mb-3'>
           Dimension : {dimension==="" ? "Not Available" : dimension} 
        </h4>
        <h5 className='text-center mb-4'>
           Type : {type==="" ? "Not Available" : type} 
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-3'> 
          <h3 className='text-center mb-4'>
          Select Location
          </h3>
          <Select setID={setID} name= "Loaction" all = {126}/>
          </div>
        <div className='col-lg-9 col-12 '> 
          <div className='row'>
          <Cards page = "/location"results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location