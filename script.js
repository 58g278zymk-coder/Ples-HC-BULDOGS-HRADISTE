function openPhoto(src) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightbox-img");

    image.src = src;

    lightbox.style.display = "flex";
}


function closePhoto() {

    document.getElementById("lightbox")
        .style.display = "none";
}


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePhoto();

        }
    }
);
