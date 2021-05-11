// show recipes in main-container
let item_container = document.getElementById('item-container');
let topic = 'all';
let words_per_page = 10;
let currentPage = 1;
let filteredWords = words;
let searchedWords = words;
let yOffset;
let btn_next = document.getElementById("btn_next");
let btn_prev = document.getElementById("btn_prev");
// 
numPages= () => {
    return Math.ceil(searchedWords.length / words_per_page);
}
function prevPage() {
    if(currentPage > 1) {
        currentPage--;
        showCards(currentPage);
    }
}
function nextPage() {
    if(currentPage < numPages()) {
        currentPage++;
        showCards(currentPage);
    }
}
// 
function showThisItem(clicked_id) {
    showDetailItem(clicked_id);
}
function showCards(){
    // let itemContainers = document.getElementsByClassName('content-item');
    item_container.innerHTML ='';
for (let idx = 1; idx < filteredWords.length; idx++) {
    item_container.insertAdjacentHTML('beforeend',
     `  <div class="item flip-card" id="${filteredWords[idx].id}" onClick="showDetailItem(this.id);">
            <div class="content flip-card-inner">
            <hr>
                <div class="title flip-card-front">
                    <h3> ${filteredWords[idx].word}</h3>
                </div>
            <div class="desc flip-card-back">
                <p> ${filteredWords[idx].definition}</p>
            </div>
            </div> 
        </div>`);       
    } 
    allItems = document.getElementsByClassName("item");
    function resizeInstance(instance){
        item = instance.elements[0];
      resizeGridItem(item);
    }
    for(x=0;x<allItems.length;x++){
        imagesLoaded( allItems[x], resizeInstance);
    }
}
showCards();
// 
// showCards = (page) => {
//     // let itemContainers = document.getElementsByClassName('content-item');
//     item_container.innerHTML = '';
//     for(let idx = (page-1)*words_per_page; idx < page*words_per_page && idx < searchedWords.length; idx++) { 
//             item_container.insertAdjacentHTML('beforeend', `<div class="item flip-card" id="${searchedWords[idx].id}" onClick="showDetailItem(this.id);">
//             <div class="content flip-card-inner">
//               <div class="title flip-card-front">
//                 <h3> ${searchedWords[idx].word}</h3>
//               </div>
//               <div class="desc flip-card-back">
//                 <p> ${searchedWords[idx].definition}</p>
//               </div>
//             </div>
//           </div>`);       
//     }
//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
//     allItems = document.getElementsByClassName("item");
//     function resizeInstance(instance){
//         item = instance.elements[0];
//       resizeGridItem(item);
// }        
// for(x=0;x<allItems.length;x++){
// imagesLoaded( allItems[x], resizeInstance);
// }
// }
// showCards(currentPage);
// // 
// function filterWords() {
//     filteredWords = words;
//     if(topic != 'all') {
//         filteredWords = words.filter((word) => word.topic == topic);
//     }
//     showCards(currentPage);
// } 
// 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// 
function showDetailItem(itemID) {
    // scroll form back to the top
    $('#form').animate({
        scrollTop: 0
    },100);
    let wordTopic = document.getElementsByClassName('more-detail-topic');
    let thisWord = words.filter((word) => Number(word.id) == itemID);

    document.getElementsByClassName('more-detail-title')[0].innerHTML = thisWord[0].word;

    let allTopic = `<span><i class="fa fa-map-o" aria-hidden="true"></i>. ${thisWord[0].topic}</span>`
    wordTopic[0].innerHTML = allTopic;
    document.getElementsByClassName('more-detail-desc')[0].innerHTML = `<p>${thisWord[0].definition}</p>`;
    document.getElementById('favorited-amount').innerHTML = thisWord[0].favorited_amount;
    // favorite btn
    document.getElementsByClassName('love-action')[0].id = thisWord[0].id;
    let favBtn = document.querySelector('.love-action');
    if(activeUser[0].favorite.includes(thisWord[0].id)) {
        favBtn.classList.add('active');
    } else if(favBtn.classList.contains('active')) {
        favBtn.classList.remove('active');
    }
    // get current yOffset
    yOffset = window.pageYOffset;
    document.getElementsByClassName('grid')[0].style.position = 'fixed';
    document.getElementById("myBlog").style.display = "block";
}
function closeForm() {
    document.getElementById("myBlog").style.display = "none";
    document.getElementsByClassName('grid')[0].style.position = 'static';
    window.scroll(0,yOffset);
}
