import axios from 'axios';

const URL = 'http://localhost:8080/api/v1/employees';
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';
const EMPLOYEES_API = 'http://localhost:8080//SkillEmployees';

class EmployeeService {
	getEmployees() {
		return axios.get(EMPLOYEES_API);
	}

	addUser(user) {
		return axios.post('http://localhost:8080/addemployees' + user, user);
	}

	createEmployee(employee) {
		return axios.post('http://localhost:8080/addemployees', employee);
	}

	getEmployeeById(employeeId) {
		return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
	}

	updateEmployee(employee, employeeId) {
		return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
	}

	deleteEmployee(employeeId) {
		return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
	}
}

export default new EmployeeService();
