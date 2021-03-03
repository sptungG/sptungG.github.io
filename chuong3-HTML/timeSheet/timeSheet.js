let newPj = document.getElementById('new-pj');
let newTask = document.getElementById('new-task');
let newTime = document.getElementById('new-time');
let add = document.getElementById('new-pj-add');
let clear = document.getElementById('new-pj-clear');
let tableBody = document.getElementById('table-body');
let timeSheetData = [{
    project: 'Learn front-end',
    task: 'Learn HTML',
    timeSpent: '6'
}, {
    project: 'Learn front-end',
    task: 'Learn CSS',
    timeSpent: '8'
}, {
    project: 'Learn front-end',
    task: 'Learn JS Variables and Data types',
    timeSpent: '6'
}, {
    project: 'Learn git',
    task: 'Learn git basics',
    timeSpent: '2'
}];
//1 2 3 4 5 6 7
function upDate() {
for(let data of timeSheetData) {
    tableBody.insertAdjacentHTML('beforeend', `<tr><td>${data.project}</td><td>${data.task}</td><td>${data.timeSpent}</td><td><button class = "delete">X</button>\t<button class = "update">U</button></td><tr>`)}
}
upDate();
// 8

