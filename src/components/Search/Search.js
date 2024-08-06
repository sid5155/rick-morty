import React from "react";
import styles from "./Search.module.scss"
const Search = ({setSearch, setPageNumber}) => {

    return (

        <form className="d-flex justify-content-center gap-4 mb-3"> 
        <input 
        onChange={(inp) => {
            setPageNumber() 
            setSearch(inp.target.value)
        }}
        placeholder = "Search for Characters" type="text" className={styles.input}/ >
        <button className={`${styles.btn}btn.btn-primary fs-5`}>Search</button>

        </form>
    )
}

export default Search;