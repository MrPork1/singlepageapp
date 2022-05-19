import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//import UsingFetch from './calls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';


function SearchBar(data) {
return (
    <div className='search'>
    <Form>
        <Form.Group className="mb-3" controlId="formbasicInput">
            <Form.Label>Search API for Beers</Form.Label>
            <Form.Control type="text" placeholder="Enter a beer..."></Form.Control>

            <Button variant="primary" type="submit">Search</Button>
 
        {/* <DropdownButton id="dropdown-basic-button" title="Filter By">
                <DropdownButton id="dropdown-basic-button" title="Category">
                 <Dropdown.Item eventKey="100">General Knowledge</Dropdown.Item>
             <Dropdown.Item eventKey="101">History</Dropdown.Item>
                 <Dropdown.Item eventKey="102">Animals</Dropdown.Item>
             </DropdownButton>
             <DropdownButton id="dropdown-basic-button" title="Difficulty">
                 <Dropdown.Item eventKey="1">Easy</Dropdown.Item>
                 <Dropdown.Item eventKey="2">Medium</Dropdown.Item>
                 <Dropdown.Item eventKey="3">Hard</Dropdown.Item>
             </DropdownButton>
         </DropdownButton> */}
        </Form.Group>
    </Form>
             <ul>
           {data && data.map(animal => (
             <li key={animal.id}> 
             <h5>Beer: {animal.name}</h5>
            Description: {animal.description}</li>
              
           ))}
         </ul>
    </div>
    )
}

export default SearchBar;

/*https://www.emgoto.com/react-search-bar/*/