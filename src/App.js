import './App.css';
import AddBook from './components/AddBook';
import Books from './components/Books';
import NavBar from './components/NavBar';
import {BookController} from './context/BookContext'

function App() {
  return (
    <div className="App">
      <BookController>
        <NavBar />
        <Books />
        <AddBook />
      </BookController>
    </div>
  );
}

export default App;
