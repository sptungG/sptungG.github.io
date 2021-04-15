function menu() {
	var burger = document.querySelector(".hamburger");
	var navList = document.querySelector(".nav-list");

	burger.addEventListener("click", function (e) {
		e.preventDefault();
		burger.classList.toggle("menu--active");
		navList.classList.toggle("list__active");
	});
}

menu();
