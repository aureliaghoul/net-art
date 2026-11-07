const button = document.getElementById("button")
const image = document.getElementById("img")

function toggleImage () {
    image.hidden = !image.hidden;
}

button.addEventListener("click", toggleImage)