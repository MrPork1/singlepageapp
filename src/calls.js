import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import { Dropdown, Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

// const UsingFetch = (searchValue) => {

  // const[searchInput, setSearchInput] = useState('');
  // const [filteredRersults, setFilteredResults] = useState([])
  // const [animals, updateAnimals] = useState([])

  // const fetchData = () => {
  //   fetch('https://api.punkapi.com/v2/beers')
  //   //https://zoo-animal-api.herokuapp.com/animals/rand/3 this works!
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       updateAnimals(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

//   const searchItems = () => {
//     setSearchInput(searchValue)
//     if (searchInput !== '') {
//       const filteredData = animals.filter((item) => {
//         return Object.values(item).join('').toLowerCase().includes(searchInput)
//       })
//       setFilteredResults(filteredData)
//     }
//     else {
//       setFilteredResults(animals)
//     }
//   }

//   return (
//     <div>
//       <p>Number of results: {animals.length}</p>

//         <ul>
//           {animals && animals.map(animal => (
//             <li key={animal.id}> 
//             <h5>Beer: {animal.name}</h5>
//               Description: {animal.description}</li>
              
//           ))}
//         </ul>
//     </div>
//   )
// }

// export default UsingFetch