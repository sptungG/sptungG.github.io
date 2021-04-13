// - Test(name(string), tasklist(array))
// - Developer(name(string), tasklist(array))
// - Manager(name(string), tasklist(array), employees(array))

//CREATE EMPLOYEE
async function createEmployee(id, data, position){
    if(position == 'tester'){
        db.collection('testers').add(data);
    }
    else if(position == 'developer' ){
        db.collection('developers').add(data);
    }
    else if(position == 'manager' ){
        db.collection('managers').add(data);
    }
    else{
        console.log('Please enter your data again');
    }
    let manager_result = await db.collection('managers').doc(id).get();
    let employees = manager_result.data().employees;
    employees.push(data.name);
    console.log(employees);
    db.collection('managers').doc(id).update({employees});
}