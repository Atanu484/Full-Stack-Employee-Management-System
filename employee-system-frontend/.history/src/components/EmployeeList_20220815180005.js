
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import Employee from "./Employee";

const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
               const response = await EmployeeService.getEmployees(); 
               setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
      fetchData();
    }, [])

    const

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                onClick={() => navigate('/addEmployee')}
                type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Employee</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className='text-left'>First Name</th>
                            <th className='text-left'>Last Name</th>
                            <th className='text-left'>Email Id</th>
                            <th className='text-right px-24'>Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className='bg-white'>
                        {employees.map((employee) => (
                        <Employee employee={employee} key={employee.id}></Employee>
                        ))};
                        </tbody>
                        )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;