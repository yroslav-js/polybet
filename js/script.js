function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


const burger = document.getElementById('burger')
const body = document.body

burger.addEventListener('click', () => {
	if (body.classList.contains('open')) {
		closeSidebar()
	} else {
		showSidebar()
	}
})

function showSidebar() {
	body.classList.add('open')
}

function closeSidebar() {
	body.classList.remove('open')
}

// const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

// if (menuLinks.length > 0) {
// 	menuLinks.forEach(link => {
// 		link.addEventListener("click", onMenuLinkClick)
// 	})
// 	function onMenuLinkClick(e) {
// 		closeSidebar()
// 		const menuLink = e.target
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto)
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			})
// 			e.preventDefault()
// 		}
// 	}
// }