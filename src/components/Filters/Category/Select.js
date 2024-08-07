import React from 'react'

const Select = ({all, name , setID}) => {

    console.log()
  return (
    <select 
    onChange={(e)=> setID(e.target.value)}
    class="form-select" aria-label="Default select example">
    <option  value= '1' defaultValue='1'>select location</option>
    {/* dynamically create options based on all props */}
    {[...Array(all).keys()].map((x)=> {
        return  ( <option value={x+1}> {name} : {x+1}</option>
        )
    })}

  </select>
  )
}

export default Select