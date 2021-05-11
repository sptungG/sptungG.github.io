// listener for filter bar

let topicSelect = document.getElementById('topic-select');
let clearSearchButton = document.getElementById('clear-search-btn');
const searchBar = document.getElementById('search-bar');
// topic filter

function filterWords() {
    filteredWords = words;
    if(topic != 'all') {
        filteredWords = words.filter((word) => word.topic == topic);
    }
    showCards();
} 
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("topic-select");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){

    topic = this.value;
    filterWords();
    
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// if filter not found any clear html
clearHTMLItem = () => {
    item_container.innerHTML = '';
    btn_next.style.visibility = "hidden";
    currentPage = 1;
}
// search filter
currentSearchFilter = () => {
    let searchString = searchBar.value;
    currentPage = 1;
    searchedWords = filteredWords.filter((word) => {
        return (
            removeVietnameseTones(word.word).toLowerCase().includes(removeVietnameseTones(searchString).toLowerCase())
        );
    });
    if(searchedWords.length != 0) {
        // showCards();
    } else clearHTMLItem();
}
// 
topicSelect.addEventListener('change', () => {
    topic = topicSelect.value;
    filterWords();
    currentSearchFilter();
});
// 
document.getElementById('search-bar-container').addEventListener('click', (e) => {
    if(e.target.tagName === 'I' || e.target.tagName === 'BUTTON' || (e.target.tagName === 'DIV' && document.body.clientWidth >= 1700)) {
        searchBar.value = '';
            currentSearchFilter();
            clearSearchButton.style.display = 'none'; 
    }
});
searchBar.addEventListener('keyup', () => {
    clearSearchButton.style.display = 'block';
    currentSearchFilter();
    // in case user not using clear btn to remove the text
    if(searchBar.value == '') {
        clearSearchButton.style.display = 'none';
    }
});
// USER CLICK USER'S ICON OPEN USER PAGE
function openUserPage() {
    document.body.style.overflow = 'hidden';
    $('.user-page-outer-container').css('display','block');
    loadUserFavorited();
}
function closeUserPage() {
    document.body.style.overflow = 'visible';
    $('.user-page-outer-container').css('display','none');
} 
// favorite btn 
function favoriteThisWord(idx) {
    let thisWord = words.filter((word) => word.id == idx)
    if(activeUser[0].role != 'none') {
        let favoriteBtn = document.querySelector('.love-action')
         if(favoriteBtn.classList.contains('active')) {
            thisWord[0].favorited_amount = Number(thisWord[0].favorited_amount) - 1;
            activeUser[0].favorite.splice(activeUser[0].favorite.indexOf(idx),1);
         } else{
            thisWord[0].favorited_amount = Number(thisWord[0].favorited_amount) + 1;
            activeUser[0].favorite.push(idx);
         }
        //  loadUserFavorited();
         document.getElementById('favorited-amount').innerHTML = thisWord[0].favorited_amount;
         document.querySelector('.love-action').classList.toggle('active');
    }
}
// 
function openNewWordPopup() {
    document.body.style.overflow = 'hidden';
    $('.new-recipes-container').css('display','block');
    loadCurrentWordList();
}
function closeNewWordPopup() {
    document.body.style.overflow = 'visible';
    $('.new-recipes-container').css('display','none');
    showWords(currentPage);
}