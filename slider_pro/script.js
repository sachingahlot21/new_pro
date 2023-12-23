document.addEventListener("DOMContentLoaded", function () {

    const image = document.getElementById("image");

    const slider = document.getElementById("brightness_slider");

    let currentBrightness = slider.value;

    slider.addEventListener("input", function () {
        currentBrightness = slider.value;
        updateImageBrightness();
    })

    function updateImageBrightness() {
        image.style.filter = `brightness(${currentBrightness}%)`;

    }

});