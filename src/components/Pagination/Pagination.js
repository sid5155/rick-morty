import React from "react";
import ReactPaginate from 'react-paginate';


const Pagination = ({info, pageNumber, setPageNumber}) => {

return <ReactPaginate
nextLabel = 'Next'
previousLabel = 'Prev' 
nextclassName ="btn btn-secondary"
previousclassName ="btn btn-secondary"
pageclassName ="page-item"
pageLinkclassName="page-link"
className = 'pagination justify-content-center gap-4 my-4' 
onPageChange={(data)=>{
    setPageNumber(data.selected + 1)
}}
activeclassName="active"
pageCount={info?.pages}/>
}

export default Pagination