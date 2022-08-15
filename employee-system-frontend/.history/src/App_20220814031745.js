
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes
        <AddEmployee />
        <EmployeeList/>
      </BrowserRouter>
    </>
  );
}

export default App;
