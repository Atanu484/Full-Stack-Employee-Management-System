
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import addEmployee from './components/addEmployee';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />}></Route>
          <Route path="/addEmployee" element={<addEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
