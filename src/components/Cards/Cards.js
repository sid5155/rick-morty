import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss"

const Cards = ({results, page}) => {

    let display

    if (results) {
        //mapping over results to create card for every character
        display = results.map((charac) => {

            let {id, name, image, location, status} = charac
            return(
            
                 <Link style={{textDecoration: "none"}}to={`${page}${id}`} key = {id} className="col-lg-3 col-md-6  mb-3 position-relative d-flex align-items-stretch text-dark"> 
            <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                <img src={image} alt="" className={`${styles.img} img-fluid`} />
                <div className= {`${styles.content} content`}> 
                    <div className="fs-4 fw-bold mb-4"> {name} </div>
                    <div className=""> 
                        <div className="fs-6">Last Location</div>
                        <div className="fs-5">{location.name}</div>
                      

                    </div>
                </div>
            </div>
            {(()=> {

                if(status === 'Dead'){
             return (<div className= {`${styles.badge} position-absolute  badge bg-danger`} > {status}</div>)

                }
                else if(status=== 'Alive'){
                    return(
                        <div className= {`${styles.badge} position-absolute  badge bg-success`} > {status}</div>
                    )
                }
                else{
                    return(
                        <div className= {`${styles.badge} position-absolute badge bg-dark`} > {status}</div>
                    )
                }
        })()}
            
             </Link>
        
           
             )})
    }else{
       display =  'No Characters found'
    }
    return <> {display}</>
}
export default Cards