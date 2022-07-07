function mudaCor(){
    mudaClasses();
	changeText();
}

function mudaClasses(){
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
}
function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

button.addEventListener('click', mudaCor);