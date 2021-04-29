const arr = [
    {
        name: 'Arsenal',
        points: 99,
        GD: 45
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39
    },
    {
        name: 'Manchester United',
        points: 60,
        GD: 29
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39
    },
]

function sortTable(list) {
    list.sort((a,b) => compare(a,b));
    function compare(a,b) {
        //compare points
        let points = b.points -a.points;
        if (points !== 0) return points;
        //compare GD
        let GD = b.GD - a.GD;
        if (GD !== 0) return b.GD - a.GD;
        //compare alphabets
        if (b.name > a.name) {
            return -1;
        } else return 1
    }
    console.log(list);
    return list;
}
function bai2() {
    document.getElementById("result2").innerHTML = " Inspect - F12"; 
    sortTable(arr);
}
