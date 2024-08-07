import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({setSpecies, setPageNumber}) => {
  let species = ["Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];


  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <div className="d-flex flex-wrap gap-2">
        {/* mapping through species array to create filter button */}

          {species.map((species, index) => (
            <FilterBTN setPageNumber={setPageNumber} task={setSpecies} key={index} name="species" items={species} index={index} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
