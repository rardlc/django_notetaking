import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';
import NotebookIndex from './components/NotebookIndex';

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

      <div className='rootDisplay'>
      <NotebookIndex></NotebookIndex>
      </div>
    </div>
  );
}

export default App;
