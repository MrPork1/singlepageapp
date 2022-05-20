import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown, InputGroup, FormControl, FormLabel, ButtonGroup, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';


function App() {

  const textInput = React.createRef()

  const [beers, updateBeers] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    //https://zoo-animal-api.herokuapp.com/animals/rand/3 this works!
      .then(response => {
        if (response.status >= 400) {
          setError(true)
          throw new Error("Sever responds with error!")
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setLoading(false)
        updateBeers(data)
      })
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const searchItems = () => {
    setSearchInput(textInput.current.value)
    if (textInput.current.value !== '') {
      const filteredData = beers.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(textInput.current.value.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(beers)
    }
  }

  const filterResultsFromDropdown = (searchP) => {
    if (searchInput !== '' && searchP === 'first_brewed') {
      const filteredData = [...filteredResults].sort((a,b) => {
        return a.first_brewed.localeCompare(b.first_brewed)
      })
      console.log(filteredData)
      setFilteredResults(filteredData)
    }
    else {
      if (searchInput !== '' && searchP === 'ph') {
        const filteredData = [...filteredResults].sort((a,b) => {
          return a.ph > b.ph ? 1 : -1
        })
        console.log(filteredData)
        setFilteredResults(filteredData)
      }
    }
}

  return (
    <div className="App">
      <div className="header">

      <h3>Sean's Beer Searching</h3>

      <div className="searchArea">
      <FormLabel htmlFor="beerSearch">Search API for Beers</FormLabel>

      <div class="input-group mb-3">
        <input ref={textInput} type="text" class="form-control" id="search" placeholder="Search for beer..." name="search"></input>
        <button type="submit" class="btn btn-primary" onClick={searchItems}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
      </div>

      <Form.Label>Filter By</Form.Label>
      <Form.Select onChange={(e) => filterResultsFromDropdown(e.target.value)}>
          <option value=""></option>
          <option value="first_brewed">First brewed</option>
          <option value="ph">ph level</option>
        </Form.Select>
        </div>

        </div>

      <div className="App-body">
        <div className="resultsSection">
        {isError == true ? (
          <h4>Failed to get data from the API.</h4>
        ) : (
          <p></p>
          )}


          {searchInput.length > 0 ? (
            <h4>{filteredResults.length > 0 ? <h4>Number of results from search: {filteredResults.length}</h4> : 'No results found!'}</h4>
          ) : (
            <h4>Number of results: {beers.length}</h4>
          )}
          </div>

        {isLoading && isError == false ? (
          <p>Loading...</p>
        ) : (
          <ul class="no-bullets">
          {searchInput.length > 0 ? (
            filteredResults.map((item) => {
              return (
              <li key={item.id}> 
              <h5>Name: {item.name}</h5>
              Description: {item.description} <br />
              Tagline: {item.tagline} <br />
              First brewed: {item.first_brewed} <br />
              ph level: {item.ph}</li>
            )})
          ) : (
            beers.map((item) => {
              return (
              <li key={item.id}>
              <h5>Name: {item.name}</h5>
              Description: {item.description} <br />
              Tagline: {item.tagline} <br />
              First brewed: {item.first_brewed} <br />
              ph level: {item.ph}</li>
            )})
          )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

{/* <p>Number of results from search: {filteredResults.length}</p> */}