
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");
let countD = document.getElementById("down-timer");
let countU = document.getElementById("up-timer");
let reset = document.getElementById('reset');

countU.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            countUp();
        }, 1000);
    }
    startInterval();
})
countD.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            countDown();
        }, 1000);
    }
    startInterval();
})
reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;   
    document.getElementById("timer").innerHTML = checkTime(h.value) + ":" + checkTime(m.value) + ":" + checkTime(s.value);
    clearInterval(startTimer);
})

function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    // else if((Math.floor(i%60) != 0)){ i = Math.floor(i%60);}
    // else{i = 0}  // add zero in front of numbers < 10
    return i;
}
function countUp() {
    s.value++;
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    }else if(Math.floor(s.value % 60) == 0){
        s.value = 0;
        m.value++;
    }else if(Math.floor(s.value % 3600) == 0){
        m.value = 0;
        s.value = 0;
        h.value++;
    }
    document.getElementById("timer").innerHTML = checkTime(h.value) + ":" + checkTime(m.value) + ":" + checkTime(s.value);
 }
function countDown(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    document.getElementById("timer").innerHTML = checkTime(h.value) + ":" + checkTime(m.value) + ":" + checkTime(s.value);
    
}