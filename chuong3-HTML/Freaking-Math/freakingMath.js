// $('.game').css("transition","all 1s");
var num1, num2, sum, time, count1, count2, highscore1 = 0, highscore2 = 0;
var colors = ["#551A8B","#800080","#CD2990","#CD0000","#EE7600","#8B658B","#008B00","#00CDCD","#838B8B","#CD853F"];
//random phép toán
function changeNumber() {
    num1 = Math.floor(Math.random() * 20);
    num2 = Math.floor(Math.random() * 20);
    var sumtest = [num1+num2+2, num1+num2-2, num1+num2]
    sum = sumtest[Math.floor(Math.random() * sumtest.length)];
    $('.num-1').text(num1);
    $('.num-2').text(num2);
    $('.sum').text(sum);
}

//random màu nền
function changeBgColor() {
      $(".game").css({
        backgroundColor: colors[parseInt(Math.random() * colors.length)]
    })
}

//reset timebar kiểu thường
function resetTime1() {
    $('.time').animate({right: '0%'}, 1500);
    $('.time').finish();
    $('.time').animate({right: '100%'}, 1500);
}

// timebar kiểu 20s
function resetTime2() {
    $('.time').animate({right: '0%'}, 2000);
    $('.time').finish();
    $('.time').animate({right: '100%'}, 20000);
}
    
//game over kiểu thường
function endGame1(){
    $('.time').css("display","none");
    $('.Playing1').css("display","none");
    $('.Playing2').css("display","none");
    $('.afterPlaying1').css("display","block");
    $('.score').text(count1);
    if (count1 > highscore1) {
        highscore1 = count1;
    }
    $('.highScore').text(highscore1);
}

//game over kiểu 20s
function endGame2(){
    $('.time').css("display","none");
    $('.Playing1').css("display","none");
    $('.Playing2').css("display","none");
    $('.afterPlaying1').css("display","none");
    $('.afterPlaying2').css("display","block");
    $('.score').text(count2);
    if (count2 > highscore2) {
        highscore2 = count2;
    }
    $('.highScore').text(highscore2);
}

$('.true1').mousedown(function() {
    $(this).css("background-color","#3598db");
    $('.fa-check').css("color","#ecf0f1");
})

$('.true1').mouseup(function() {
    $(this).css("background-color","#ecf0f1");
    $('.fa-check').css("color","#3598db")
})

$('.true2').mousedown(function() {
    $(this).css("background-color","#3598db");
    $('.fa-check').css("color","#ecf0f1");
})

$('.true2').mouseup(function() {
    $(this).css("background-color","#ecf0f1");
    $('.fa-check').css("color","#3598db")
})

$('.false1').mousedown(function() {
    $(this).css("background-color","#e84c3d");
    $('.fa-times').css("color","#ecf0f1");
})

$('.false1').mouseup(function() {
    $(this).css("background-color","#ecf0f1");
    $('.fa-times').css("color","#e84c3d")
})

$('.false2').mousedown(function() {
    $(this).css("background-color","#e84c3d");
    $('.fa-times').css("color","#ecf0f1");
})

$('.false2').mouseup(function() {
    $(this).css("background-color","#ecf0f1");
    $('.fa-times').css("color","#e84c3d")
})

//chơi lại kiểu thường
$('.restart1').click(function() {
    clearTimeout(time)
    resetTime1();
    time = setTimeout(function() {
        endGame1();
    }, 2000);
    $('.time').css("display","block");
    $('.afterPlaying1').css("display","none");
    $('.Playing1').css("display","block");
    $('.Playing2').css("display","none");
    changeNumber();
    changeBgColor();
    count1 = 0;
    $('.point').text(count1);
})

//chơi lại kiểu 20s
$('.restart2').click(function() {
    clearTimeout(time)
    resetTime2();
    time = setTimeout(function() {
        endGame2();
    }, 20000);
    $('.time').css("display","block");
    $('.afterPlaying2').css("display","none");
    $('.Playing1').css("display","none");
    $('.Playing2').css("display","block");
    changeNumber();
    changeBgColor();
    count2 = 0;
    $('.point').text(count2);
})

//chọn kiểu chơi bình thường
$('.start1').click(function(){
    $('.beforePlaying').css("display","none");
    $('.time').css("display","block");
    $('.Playing1').css("display","block");
    changeBgColor();
    changeNumber();
    count1 = 0;
    $('.point').text(count1);
    resetTime1();
    time = setTimeout(function() {
        endGame1();
    }, 2000);
})

$('.true1').click(function(){
    clearTimeout(time)
    resetTime1();
    time = setTimeout(function() {
        endGame1();
    }, 2000);
    if (num1 + num2 == sum) {
        changeNumber();
        count1++;
        $('.point').text(count1);
    } else {
        endGame1();
    }
})

$('.false1').click(function(){
    clearTimeout(time)
    resetTime1();
    time = setTimeout(function() {
        endGame1();
    }, 2000);				
    if (num1 + num2 != sum) {
        changeNumber();
        count1++;
        $('.point').text(count1);
    } else {
        endGame1();
    }
})

//quay về menu
$('.menu').click(function() {
    clearTimeout(time)
    $('.time').css("display","none");
    $('.beforePlaying').css("display","block");
    $('.afterPlaying1').css("display","none");
    $('.afterPlaying2').css("display","none");
})

//chọn kiểu chơi 20s
$('.start2').click(function(){
    $('.beforePlaying').css("display","none");
    $('.time').css("display","block");
    $('.Playing2').css("display","block");
    changeBgColor();
    changeNumber();
    count2 = 0;
    $('.point').text(count2);
    resetTime2();
    time = setTimeout(function() {
        endGame2();
    }, 20000);			
})	

$('.true2').click(function(){
    if (num1 + num2 == sum) {
        changeNumber();
        count2++;
        $('.point').text(count2);
    } else
        changeNumber();
})

$('.false2').click(function(){
    if (num1 + num2 != sum) {
        count2++;
        changeNumber();
        $('.point').text(count2);
    } else
        changeNumber();
})	