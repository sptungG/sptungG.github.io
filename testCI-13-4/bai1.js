function bai1() {
        let arr1 = String(prompt('--- Enter your String: '));
        while( arr1 == ""){
            arr1 = String(prompt('"<!> NULL. Please, try again."\n--- Enter your String: '));
          }
        document.getElementById("array").innerHTML = arr1;
        
        arr1 = arr1.split('');
        document.getElementById("result1").innerHTML = checkSymmetry(arr1);   
}

function checkSymmetry(str) {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            console.log(false);
            return 'false';
        }
    }
    console.log(true);
    return 'true';
}


//     c = a.filter((a) => {
    
//     let flag = false
//         b.forEach((x) => {
//             if(a == x){
//                 flag = true;
//                 }
//             })
//         if(!flag){
//             return a;
//         }
//     })

//     d = b.filter((b) => {
//         let flag = false
//         a.forEach((x) => {
//             if(b == x){
//             flag = true;
//             }
//         })
//     if(!flag){
//         return b;
//         }
//     })

// console.log(...c,...d);