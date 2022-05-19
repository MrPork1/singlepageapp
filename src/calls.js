import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function UsingFetch() {

  const[searchInput, setSearchInput] = useState('');

  const [animals, updateAnimals] = useState([])

  const fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers?beer_name=buz')
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

  return (
    <div>
      <p>Number of results: {animals.length}</p>
        <ul>
          {animals && animals.map(animal => (
            <li key={animal.id}> 
            <h5>Beer: {animal.name}</h5>
              Description: {animal.description}</li>
              
          ))}
        </ul>
    </div>
  )
}

export default UsingFetch