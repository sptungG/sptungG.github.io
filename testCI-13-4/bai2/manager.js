import Employee from "./employee.js";

class Manager extends Employee{
    employees =  new Array;

    constructor(name, taskList, employees){
        super(name,taskList);
        this.employees = employees;
    }

    addEmployee(...employeeList){
        for (let i = 0; i < employeeList.length; i++) {
                // addEmployee(employeeList[i]);
                this.employees.push(employeeList[i]);
                console.log(`--- [${employeeList[i].name}]-[${employeeList[i].taskList}] has been added. `);
            }
            // console.log(this.employees);
    }

    show() {
        if (this.employees.length > 0){
            console.log("Your employees:");
                console.log(this.employees);
        } 
        else {
          console.log("You haven't manage any employee");
        }
      }
}

export default Manager;