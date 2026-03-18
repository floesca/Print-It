//création d'un tableau avec les images du carrousel
//une seule image 0 dans le HTML puis on effectue le changement grâce à JS et index++
const slides = [
	"./assets/images/slideshow/slide1.jpg",
	"./assets/images/slideshow/slide2.jpg",
	"./assets/images/slideshow/slide3.jpg",
	"./assets/images/slideshow/slide4.png"
]

//tableau pour les taglines de chaque image
const tagLines = [
	"Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"
]

let currentIndex = 0
const sliderImage = document.querySelector("#banner .banner-img")
const arrowRight = document.querySelector("#banner .arrow_right")
const arrowLeft = document.querySelector("#banner .arrow_left")
const sliderTagLine = document.querySelector("#banner p")


//change la source de l'image et les texte de la tagline suivant l'index du tableau
function updateSlider() {
	sliderImage.src = slides[currentIndex]
	sliderTagLine.innerHTML = tagLines[currentIndex]
}

//quand on clique sur le bouton droit, on passe à l'image suivante
function nextSlide() {
	currentIndex++

	//si on dépasse les 4 images, on repasse à 0 pour le déroulement infini
	if (currentIndex >= slides.length) {
		currentIndex = 0
	}
	updateSlider()
}

//quand on clique sur le bouton gauche, on passe à la photo précédente
function prevSlide() {
	currentIndex--

	//permet le déroulement infini vers la gauche
	if (currentIndex < 0) {
	currentIndex = slides.length - 1
	}
	updateSlider()
}

//eventlistener pour écouter les clicks sur les boutons
//à chaque clic une fonction précédente s'éxécute
arrowLeft.addEventListener("click", prevSlide)
arrowRight.addEventListener("click", nextSlide)
	

