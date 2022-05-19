import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Form, Button, Dropdown, DropdownButton, InputGroup, FormControl, FormLabel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [beers, updateBeers] = useState([])
  const[searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([])

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers')
    //https://zoo-animal-api.herokuapp.com/animals/rand/3 this works!
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        updateBeers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = beers.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(beers)
    }
  }

  return (
    <div className="App">

      <FormLabel htmlFor="beerSearch">Search API for Beers</FormLabel>
      <InputGroup className="mb-3">

        <FormControl
          id="beerSearch"
          type="text"
          placeholder="Enter a beer..."
          onChange={event => searchItems(event.target.value)}
        />
        <Button id="buttonSubmit"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></Button>
      </InputGroup>

      <header className="App-header">
          {searchInput.length > 1 ? (
            <p>Number of results: {filteredResults.length}</p>
          ) : (
            <p>Number of results: {beers.length}</p>
          )}
        <ul>
          {searchInput.length > 1 ? (
            filteredResults.map((item) => {
              return (
              <li key={item.id}> 
              <h5>Beer: {item.name}</h5>
              Description: {item.description}</li>
            )})
          ) : (
            beers.map((item) => {
              return (
              <li key={item.id}> 
              <h5>Beer: {item.name}</h5>
              Description: {item.description}</li>
            )})
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
