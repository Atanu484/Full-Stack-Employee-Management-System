import React from 'react';

const EmployeeList = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className="h-12">
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Employee</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thread className="bg-green-50">
                        <tr>
                            <th className='text-left font-medium text-gray-500 uppercase py-5'>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th class>Actions</th>
                        </tr>
                    </thread>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;