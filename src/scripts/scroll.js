window.onscroll = () => {
	const nav = document.getElementById('nav')
	const navLogo = document.getElementById('navLogo')
	if (window.pageYOffset > nav.offsetTop) {
		nav.classList.add('sticky')
		navLogo.classList.remove('hide')
	} else {
		nav.classList.remove('sticky')
		navLogo.classList.add('hide')
	}
}
