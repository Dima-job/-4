const images = [
	'images/img1.avif',
	'images/img2.avif',
	'images/img3.avif',
	'images/img4.avif',
	'images/img5.avif',
]

let currentIndex = 0
const imageElement = document.getElementById('image')
const counter = document.getElementById('counter')
const toggleAutoBtn = document.getElementById('toggleAuto')

let autoSlide = false
let autoSlideInterval

// Функция обновления слайдера
function updateSlider() {
	imageElement.style.opacity = 0 // Делаем анимацию исчезновения
	setTimeout(() => {
		imageElement.src = images[currentIndex]
		counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`
		imageElement.style.opacity = 1 // Возвращаем изображение с анимацией
	}, 300)
}

// Обработчики кнопок "Вперед" и "Назад"
document.getElementById('next').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % images.length
	updateSlider()
})

document.getElementById('prev').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + images.length) % images.length
	updateSlider()
})

// Управление клавишами (стрелки влево и вправо)
document.addEventListener('keydown', event => {
	if (event.key === 'ArrowRight') {
		currentIndex = (currentIndex + 1) % images.length
		updateSlider()
	} else if (event.key === 'ArrowLeft') {
		currentIndex = (currentIndex - 1 + images.length) % images.length
		updateSlider()
	}
})

// Функция включения автопрокрутки
function toggleAutoSlide() {
	autoSlide = !autoSlide
	if (autoSlide) {
		autoSlideInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length
			updateSlider()
		}, 3000)
		toggleAutoBtn.textContent = 'Автопрокрутка: Вкл'
	} else {
		clearInterval(autoSlideInterval)
		toggleAutoBtn.textContent = 'Автопрокрутка: Выкл'
	}
}

// Обработчик кнопки включения/выключения автопрокрутки
toggleAutoBtn.addEventListener('click', toggleAutoSlide)
