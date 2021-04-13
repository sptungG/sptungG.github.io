import Employee from "./employee.js";

class Manager extends Employee{
    employees = [];

    constructor(name, taskList, employees){
        super(name,taskList);
        this.employees = employees
    }

    addEmployee(employee){
        this.employees.push(employee);
        console.log(this.employees);
    }

    addEmployee(...employeeList){
        for (let i = 0; i < employeeList.length ; i++) {
                this.employees.push(employeeList[i]);
            }
            console.log(this.employees);
    }

    show() {
        if (this.employees.length > 0) {
          console.log(this.employees);
        } 
        else {
          console.log("No employee");
        }
      }
}
export default Manager;