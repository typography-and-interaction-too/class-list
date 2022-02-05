document.addEventListener('DOMContentLoaded', () => {
	const classList = document.querySelector('ul')

	for (index = 0; index < classList.children.length; index += 1) {
		classList.appendChild(classList.children[Math.random() * index | 0])
	}
})
