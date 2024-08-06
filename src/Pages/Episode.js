import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards'
import Select from '../components/Filters/Category/Select'

const Episode = () => {
  let [id, setID] = useState(1)
  let [einfo, setEinfo] = useState([])
  let [results, setResults] = useState([])
  let Api = `https://rickandmortyapi.com/api/episode/${id}`
 
  let {air_date, name} = einfo

  useEffect(() => {

    (async function () {
      let data = await fetch(Api).then((res) => res.json())
      setEinfo(data)

      let echaracter = await Promise.all(
        data.characters.map((total)=> {
          return fetch(total).then(res => res.json())
        })
      )
      setResults(echaracter)
  })()

  },[Api])
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center mb-4'>
          Episode : {name==="" ? "Not Available" : name}
        </h1>
        <h5 className='text-center mb-5'>
          Air Date : {air_date==="" ? "Not Available" : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-3'> 
          <h4 className='text-center mb-4'>
          Select Episode
          </h4>
          <Select setID={setID} name= "Episode" all = {51}/>
          </div>
        <div className='col-lg-9 col-12'> 
          <div className='row'>
          <Cards page= "/episode" results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode