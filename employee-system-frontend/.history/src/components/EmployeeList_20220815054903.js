
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
               const response = await EmployeeService.getEmployees(); 
               setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
      fetchData();
    }, [])
    



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
                        {}
                        <tr>
                            <td>
                                <div>Atanu</div>
                            </td>
                            <td>
                                <div>Biswas</div>
                            </td>
                            <td>
                                <div>atanutech22@gmail.com</div>
                            </td>    
                            <td className='text-right px-6 py-4'>
                                <a href='#' className='text-left text-indigo-500 hover:text-indigo-800 px-6'>Edit</a>
                                <a href='#' className='text-left text-indigo-500 hover:text-indigo-800 px-4'>Delete</a>
                            </td>
                        </tr>
                        </tbody>
                        )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;