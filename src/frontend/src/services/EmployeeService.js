import axios from "axios";

// const API_BASE_URL = 'http://localhost:8080/api/messages/hello'
const API_BASE_URL = 'http://localhost:8080/api/employees/test'

class EmployeeService{
    getEmployees(){
        return axios.get(API_BASE_URL);
    }
}

export default new EmployeeService()