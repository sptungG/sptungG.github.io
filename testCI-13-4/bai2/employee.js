class Employee {
    name
    taskList

    constructor(name,taskList) {
        this.name = name;
        this.taskList = taskList;
    }
    displayInfo = () => {
        console.log(`|  NAME: ${this.name} | taskList: ${this.taskList} |`);
    }

    
}
export default Employee;
