import logo from './logo.svg';
//import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar} from 'react-bootstrap';


function App() {

  const [animals, updateAnimals] = useState([])
  const[searchInput, setSearchInput] = useState('');
  const [filteredRersults, setFilteredResults] = useState([])

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers')
    //https://zoo-animal-api.herokuapp.com/animals/rand/3 this works!
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        updateAnimals(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = animals.filter((item) => {
        return Object.values(item).join('').includes(searchInput)
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(animals)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='Enter a beer...' onChange={event => searchItems(event.target.value)}></input>
      <ul>
        {searchInput.length > 1 ? (
          filteredRersults.map((item) => {
            return (
            <li key={item.id}> 
            <h5>Beer: {item.name}</h5>
            Description: {item.description}</li>
          )})
        ) : (
          animals.map((item) => {
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
