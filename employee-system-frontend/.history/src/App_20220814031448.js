
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <AddEmployee />
    </BrowserRouter>
    
    </>
  );
}

export default App;
