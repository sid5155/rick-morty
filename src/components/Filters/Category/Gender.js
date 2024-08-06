import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({setGender, setPageNumber}) => {

  let gender = ['female', 'male', 'genderless', 'unknown']
return(

    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        Gender
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="d-flex flex-wrap gap-2">
        {/* mapping through gender array to create filter button */}
        {gender.map((items, index)=>(
          <FilterBTN setPageNumber={setPageNumber} task={setGender} key={index} name='gender' items={items} index={index}/>
          ))}
          </div>
       </div>
    </div>
  </div>
)
}

export default Gender