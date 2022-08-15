import React from 'react';

const EmployeeList = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className="h-12">
                {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Employee</button> */}
                <button className='rounded bg-slate-600 px-6 py-6'>Add Employee</button>
            </div>
            <div></div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thread>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Action</th>
                        </tr>
                    </thread>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;