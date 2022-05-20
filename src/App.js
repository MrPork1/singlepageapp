import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormLabel, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [beers, updateBeers] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [isDoneFiltering, setIsDoneFiltering] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
      .then(response => {
        if (response.status >= 400) {
          setError(true)
          throw new Error("Sever responds with error!")
        }
        return response.json()
      })
      .then(data => {
        //console.log(data)
        setLoading(false)
        updateBeers(data)
      })
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const searchItems = () => {
    if (searchInput !== '') {
      const filteredData = beers.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      //console.log(filteredData)
      setIsDoneFiltering(true)
      setFilteredResults(filteredData)
    }
    else {
      setIsDoneFiltering(false)
      setFilteredResults(beers)
    }
  }

  const filterResultsFromDropdown = (searchP) => {
    if (searchInput !== '' && searchP === 'first_brewed') {
      const filteredData = [...filteredResults].sort((a,b) => {
        return a.first_brewed.localeCompare(b.first_brewed)
      })
      //console.log(filteredData)
      setFilteredResults(filteredData)
    }
    else {
      if (searchInput !== '' && searchP === 'ph') {
        const filteredData = [...filteredResults].sort((a,b) => {
          return a.ph > b.ph ? 1 : -1
        })
        //console.log(filteredData)
        setFilteredResults(filteredData)
      }
    }
}

  return (
    <div className="App">
      <div className="header">

      <h3>Sean's Beer Searching</h3>

          <div className="searchArea">
                <div class="d-none d-lg-block">
                  <FormLabel>Search API for Beers</FormLabel>


                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="search" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder="Search for beer..." name="search"></input>

                  <button type="submit" class="btn btn-primary" id="button1" onClick={searchItems}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </div>


            <Form.Label>Filter By</Form.Label>
            <Form.Select onChange={(e) => filterResultsFromDropdown(e.target.value)}>
                <option value=""></option>
                <option value="first_brewed">First brewed</option>
                <option value="ph">ph level</option>
              </Form.Select>
              </div>

              <div class=".d-none d-md-block d-lg-none">
                <div>
                  <div class="row">
                    <div class="col">
                <FormLabel>Search API for Beers</FormLabel>

                  
                <div class="input-group mb-3">
                 <input type="text" class="form-control" id="search2" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder="Search for beer..." name="search2"></input>

                  <button type="submit" class="btn btn-primary" id="button2" onClick={searchItems}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </div>
                    </div>
                    <div class="col">
                <Form.Label>Filter By</Form.Label>
                  <Form.Select onChange={(e) => filterResultsFromDropdown(e.target.value)}>
                    <option value=""></option>
                    <option value="first_brewed">First brewed</option>
                    <option value="ph">ph level</option>
                  </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>

      <div className="App-body">
        <div className="resultsSection">
        {isError == true ? (
          <h5>Failed to get data from the API.</h5>
        ) : (
          <p></p>
          )}


          {isDoneFiltering ? (
            <h5>{filteredResults.length > 0 ? <h5>Number of results from search: {filteredResults.length}</h5> : 'No results found!'}</h5>
          ) : (
            <h5>Number of results: {beers.length}</h5>
          )}
          </div>

        {isLoading && isError == false ? (
          <p>Loading...</p>
        ) : (
          <ul class="no-bullets">
          {isDoneFiltering ? (
            filteredResults.map((item) => {
              return (
              <li key={item.id}> 
              <h5>Name: {item.name}</h5>
              <b>Description: </b>{item.description} <br />
              <b>Tagline:</b> {item.tagline} <br />
              <b>First brewed:</b> {item.first_brewed} <br />
              <b>ph level:</b> {item.ph}</li>
            )})
          ) : (
            beers.map((item) => {
              return (
              <li key={item.id}>
              <h5>Name: {item.name}</h5>
              <b>Description: </b>{item.description} <br />
              <b>Tagline:</b> {item.tagline} <br />
              <b>First brewed:</b> {item.first_brewed} <br />
              <b>ph level:</b> {item.ph}</li>
            )})
          )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;