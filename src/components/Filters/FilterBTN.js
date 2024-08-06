 import React from "react";

 const FilterBTN = ({name, index, items, task, setPageNumber}) => {

    return(
        
        <div>
            <input 
            onClick={()=> {
                setPageNumber(1)
                task(items)
            }}

            type="checkbox" 
            className="btn-check" 
            id={`${name}-${index}`} 
            name={name}
            />
            
            <label 
            className="btn btn-outline-primary"
            htmlFor={`${name}-${index}`} >{items}</label>
        </div>
    )
 }

 export default FilterBTN