import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';
import NotebookIndex from './components/NotebookIndex';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import Note from "./components/Note"
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
      {/* <NotebookIndex></NotebookIndex> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotebookIndex />} />
          <Route path="notes/:id/" element={<Note/>} />
        </Routes>
      </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
