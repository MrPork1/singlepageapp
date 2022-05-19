import logo from './logo.svg';
//import './App.css';
import Search from './search';
import UsingFetch from './calls';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar} from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Search/>
        <UsingFetch/>
      </header>
    </div>
  );
}

export default App;
