package com.example.employee.services;

import com.example.employee.model.Employee;

import java.util.List;

//This is the interface where we will create all the business logic
public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
