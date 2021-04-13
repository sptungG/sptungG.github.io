import Employee from "./employee.js";

class Developer extends Employee{
    constructor(name, taskList){
        super(name,taskList);
    }
}
export default Developer;