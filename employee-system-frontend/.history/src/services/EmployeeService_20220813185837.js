const EMPLOYEE_API_BASE_URL = "localhost:8080/api/v1/employees"

class EmployeeService{
    saveEmployee(employee){
        return aios.post(EMPLOYEE_API_BASE_URL, employee)
    }
}

export default new EmployeeService();