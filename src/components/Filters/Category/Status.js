import React  from "react";
import FilterBTN from "../FilterBTN"


const Status = ({setStatus,setPageNumber}) => {
    
  let status = ['Alive', 'Dead' , 'Unknown']

    return (
    
        <div className="accordion-item">
          <h2 className="accordion-header"> 
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Status
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <div className="d-flex flex-wrap gap-2">
        {/* mapping through Status array to create filter button */}

              {status.map((items, index) =>(
                  <FilterBTN setPageNumber={setPageNumber} task={setStatus} key={index} name= 'status' index={index} items={items}/>
              ))}

              </div>
            </div>
          </div>
        </div>

    )
}

export default Status