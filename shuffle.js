const shuffleStudents = () => {
	const students = document.querySelector('ul')

	for (index = 0; index < students.children.length; index++) {
		students.appendChild(students.children[Math.random() * index | 0])
	}
}



document.addEventListener('DOMContentLoaded', () => {
	shuffleStudents()

	const shuffle = document.querySelector('button')

	shuffle.onclick = () => shuffleStudents()
})
