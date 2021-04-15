import Employee from "./employee.js"
import Manager from "./manager.js"
import Developer from "./developer.js"
import Tester from "./tester.js"

let employee1 = new Developer('Tùng-1','coding' );
let employee2 = new Tester('Tùng-2','test');
let employee3 = new Developer('Tùng-3','coding');
let employee4 = new Tester('Tùng-4','test');
let employee5 = new Tester('Tùng-5','test');
let employee6 = new Tester('Tùng-6','test');
let employee7 = new Tester('Tùng-7','test');

const employeeList = [employee1,employee2,employee3,employee4,employee5,employee6,employee7];

let manager1  = new Manager('Tùng', 'manage', employeeList);

console.log("---------------------------------------------------");
for (let i = 0; i < employeeList.length ; i++){
    employeeList[i].displayInfo();
}
console.log("---------------------------------------------------");

manager1.show();

console.log("ADD employees:");
manager1.addEmployee(employee2,employee3,employee4,employee5,employee6);


// manager1.addEmployee(employee1)