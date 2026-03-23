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
const dotContainer = document.querySelector("#banner .dots")
for (i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.className = "dot"
	if (i === 0) {
		dot.className = "dot dot_selected"
	}
	dotContainer.appendChild(dot)
}
const bullets = document.querySelectorAll("#banner .dot")

//la fonction met à jour l'affichage du slider
function updateSlider() {
//modifie l'image et le texte
	sliderImage.src = slides[currentIndex]
	sliderTagLine.innerHTML = tagLines[currentIndex]

//boucle : met à jour les bullet points 
	for (let i = 0; i < bullets.length; i++) {
  	if (i === currentIndex) {
    bullets[i].classList.add("dot_selected") //condition : bullet sélectionné avec une nouvelle classe
  	} else {
    bullets[i].classList.remove("dot_selected")
  }
}
}

//fonction quand on clique sur le bouton droit, on passe à l'image suivante
function nextSlide() {
	currentIndex++

	//condition : si on est à la dernière image, on repart au début
	if (currentIndex >= slides.length) {
		currentIndex = 0
	}
	//réutilisation de la focntion pour mettre à jour l'affichage
	updateSlider()
}

//fonction quand on clique sur le bouton gauche, on passe à la photo précédente
function prevSlide() {
	currentIndex--

	//condition dans le sens inverse
	if (currentIndex < 0) {
	currentIndex = slides.length - 1
	}
	//réutilisation de la fonction de mise à jour de l'affichage
	updateSlider()
}

//eventlistener pour écouter les clicks sur les boutons
//à chaque clic une fonction s'éxécute
arrowLeft.addEventListener("click", prevSlide)
arrowRight.addEventListener("click", nextSlide)

