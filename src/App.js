import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episode from './Pages/Episode';
import Location from './Pages/Location';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsDetail from './components/Cards/CardsDetail';

function App(){
  return(
    <Router>

    <div className='App'> <Navbar/></div>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:id' element={<CardsDetail/>}/>
      <Route path='/episode' element={<Episode/>}/>
      <Route path='/episode/:id' element={<CardsDetail/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/location/:id' element={<CardsDetail/>}/>
      </Routes>

    </Router>
  )
}

  const MainPage = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let [search, setSearch] = useState('')
    let [Status, setStatus] = useState('')
    let [Species, setSpecies] = useState('')
    let [Gender, setGender] = useState('')
    

    let {info , results} = fetchedData
    

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${Status}&species=${Species}&gender=${Gender}`;
  
   // Fetch data from api whenever the api url changes
    useEffect(() => {
      (async function(){
        let data = await fetch(api)
        .then((res) => res.json())
        updateFetchedData(data);
      })();
    }, [api])

  
    return (
      <div className="App">
        <h1 className='text-center mb-5'>Characters</h1>
          <Search  setPageNumber= {setPageNumber} setSearch = {setSearch}/> 

          <div className  ='container'>
            <div className ='row'>
              <Filters 
              setGender= {setGender}
              setSpecies = {setSpecies}
              results= {results} 
              setStatus= {setStatus} 
              setPageNumber = {setPageNumber}
              />
              
              <div className ='col-lg-8 col-12'>
                <div className='row'>
                  <Cards page= "/" results= {results}/>
                </div>
              </div>
              </div>
            </div>
            <Pagination  info= {info} pageNumber = {pageNumber}  setPageNumber = {setPageNumber}/>
          </div>

    )
  }

export default App;