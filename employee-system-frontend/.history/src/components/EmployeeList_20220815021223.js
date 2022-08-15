import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
    const navigate = useNavigate();

    

    

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/addEmployee")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                First Name
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Last Name
                            </th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Email ID
                            </th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
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