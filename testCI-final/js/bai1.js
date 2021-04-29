function bai1() {
        let arr1 = prompt('--- Enter your 1st Array, separated by ( , ) : ');
        let arr2 = prompt('--- Enter your 2nd Array, separated by ( , ): ');
        while( arr1 == ""){
            arr1 = prompt('"<!> NULL. Please, try again."\n--- Enter your 1st Array: ');
        }
        while( arr2 == ""){
            arr2 = prompt('"<!> NULL. Please, try again."\n--- Enter your 2nd Array: ');
        }
        document.getElementById("array1").innerHTML = arr1;
        document.getElementById("array2").innerHTML = arr2;
        arr1 = arr1.split(',');
        arr2 = arr2.split(',');
        document.getElementById("result1").innerHTML = findUnique(arr1,arr2);   
}

function findUnique(arr1, arr2) {
    let unique1 = arr1.filter((elements) => arr2.indexOf(elements) === -1);
    let unique2 = arr2.filter((elements) => arr1.indexOf(elements) === -1);
    let result = unique1.concat(unique2);
    console.log(result);
    return result;
}
