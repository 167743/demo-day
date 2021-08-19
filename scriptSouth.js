let homeButton = document.querySelector("#home");
let northButton = document.querySelector("#one");
let europeButton = document.querySelector("#two");
let asiaButton = document.querySelector("#three");
let southButton = document.querySelector("#four");
let austButton = document.querySelector("#five");
let africaButton = document.querySelector("#six");
let antButton = document.querySelector("#seven");
let image = document.querySelector("#plane");

northButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "north forwards 3s";
}

southButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "south forwards 3s";

}

asiaButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "asia forwards 3s";

}

europeButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "europe forwards 3s";

}

austButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "aust forwards 3s";

}

africaButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "africa forwards 3s";

}

antButton.onmouseover = function(event) {
	event.preventDefault();
	image.style.animation = "ant forwards 3s";

}

northButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "north forwards 3s";

	window.location.replace("indexnorth.html");
}


asiaButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "asia forwards 3s";

    window.location.replace("indexAsia.html");
}

europeButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "europe forwards 3s";

	window.location.replace("indexEuro.html");
}

austButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "aust forwards 3s";

    window.location.replace("indexAust.html");
}

africaButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "africa forwards 3s";

    window.location.replace("indexAfrica.html");
}

antButton.onclick = function(event) {
	event.preventDefault();
	image.style.animation = "ant forwards 3s";

    window.location.replace("indexAnt.html");
}

homeButton.onmouseover = function(event) {
    event.preventDefault();
    image.style.animation = "hom forwards 3s";
}

homeButton.onclick = function(event) {
    event.preventDefault();
    image.style.animation = "hom forwards 3s";

    window.location.replace("index.html");
}