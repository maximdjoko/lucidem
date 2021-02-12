// script for the hamburger naigation menu with rlinks(responsive links)
var hamburger = document.querySelector("#bars")
var cross = document.querySelector("#crossTimes")
console.log(cross);
var rlinks = document.querySelector("#rLinks")
console.log(rlinks);

hamburger.addEventListener("click", () => {
    rlinks.style.right = 0;
    rlinks.style.display = "block";
})
cross.addEventListener("click", () => {
    rlinks.style.right = -100 + "%";
})


// script for the automatic slider animation
var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1;
    }
}, 5000)