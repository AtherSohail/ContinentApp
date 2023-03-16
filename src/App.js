import logo from './logo.svg';
import './App.css';
import Header from './Header';
import DropdownMenu from './Component/DropdownMenu';
import SearchBar from './Component/SearchBar';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <SearchBar/>
      <DropdownMenu/>
      
    </div>
  );
}

export default App;
