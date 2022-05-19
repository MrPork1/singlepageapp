import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown, InputGroup, FormControl, FormLabel, ButtonGroup, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [beers, updateBeers] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([])
  const [isLoading, Loading] = useState(false)
  const [option, setOption] = useState()

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
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
          return a.ph < b.ph
        })
        console.log(filteredData)
        setFilteredResults(filteredData)
      }
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
         {/* <Button id="buttonSubmit"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></Button> */}
      </InputGroup>

      <Form.Label>Filter By</Form.Label>
      <Form.Select onChange={(e) => filterResultsFromDropdown(e.target.value)}>
          <option value=""></option>
          <option value="first_brewed">First brewed</option>
          <option value="ph">ph level</option>
        </Form.Select>

        <hr />

      <header className="App-header">
          {searchInput.length > 1 ? (
            <p>Number of results from search: {filteredResults.length}</p>
          ) : (
            <p>Number of results: {beers.length}</p>
          )}
        <ul>
          {searchInput.length > 1 ? (
            filteredResults.map((item) => {
              return (
              <li key={item.id}> 
              <h5>Beer: {item.name}</h5>
              Description: {item.description} <br />
              Tagline: {item.tagline} <br />
              First brewed: {item.first_brewed} <br />
              ph level: {item.ph}</li>
            )})
          ) : (
            beers.map((item) => {
              return (
              <li key={item.id}>
              <h5>Beer: {item.name}</h5>
              Description: {item.description} <br />
              Tagline: {item.tagline} <br />
              First brewed: {item.first_brewed} <br />
              ph level: {item.ph}</li>
            )})
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
