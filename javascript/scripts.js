function shake(){
	const icons = document.querySelectorAll('img');
	icons.forEach(icon => {
		icon.classList.add('shake');
	});
}
