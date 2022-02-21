import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';

/*
3 views?
 1. Notebook index view, where you choose a notebook to edit
 2. Notes index view, where you choose a note
 3. Edit notebook view
*/


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => alert("howdy")}>howdy</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
