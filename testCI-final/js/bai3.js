let totalScore = 0;
let answerAll = [];
let currentQuestion = 0;

function $(element) {
    return document.querySelector(element);
}

async function getQuestion(api) {
    const response = await fetch(api);
    const data = await response.json();
    answerAll = data.results[currentQuestion].correct_answer.concat(',',data.results[currentQuestion].incorrect_answers).split(',');
    $('#content-question').innerHTML = data.results[currentQuestion].question;
    let randomArray = randomPosition();
    $('#option-1').innerHTML = answerAll[randomArray[0]];
    $('#option-2').innerHTML = answerAll[randomArray[1]];
    $('#option-3').innerHTML = answerAll[randomArray[2]];
    $('#option-4').innerHTML = answerAll[randomArray[3]];
}

function randomPosition() {
    let arr = [];
    let random = Math.floor(Math.random()*4);
    for (let i = 0; i < 4; i++) {
        while (arr.includes(random)) {
            random = Math.floor(Math.random()*4)
        }
        arr.push(random);
    }
    return arr;
}


document.querySelectorAll('.option').forEach(item => item.addEventListener('click', answerHandler));

function answerHandler() {

    if (this.textContent == answerAll[0]) {
        totalScore += 10;
        $('#total-score').innerHTML = totalScore;

        $('#inform').innerHTML = 'Congratulation! +10 points!'
        $('#inform').classList.add('text-right');
        $('#inform').classList.remove('text-wrong');
    } else {
        $('#inform').innerHTML = 'Wrong answer. Zero point!';
        $('#inform').classList.add('text-wrong');
        $('#inform').classList.remove('text-right');
    }

    setTimeout(nextQuestion, 1000);
}

$('#view-result').addEventListener('click', showAnswer);
$('#next-question').addEventListener('click', nextQuestion);

function showAnswer() {
    $('#show-answer').innerHTML = answerAll[0];
}

function nextQuestion() {
    currentQuestion++;
    getQuestion('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
    $('#inform').innerHTML = '';
    $('#show-answer').innerHTML = '';
    if (currentQuestion === 4) {
        $('.container').innerHTML = '<h2> ¯&#8726;_(ツ)_/¯ There are no more questions.</h2>'
        // after 2s -> Reset
        setTimeout(function(){
            location.reload()
            },2000);
    }
}

getQuestion('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
