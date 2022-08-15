
import React from 'react';
const EmployeeList = () => {
    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th></th></th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email Id
                            </th>
                            <th className="text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    );
};

export default EmployeeList;