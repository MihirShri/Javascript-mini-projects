document.addEventListener("click", lightBoxClick);

function lightBoxClick(event) {
    var elem = event.target,
        elemID = elem.getAttribute("id"),
        lightboxImg = document.getElementById("lightbox-image"),
        lightbox = document.getElementById("lightbox-overlay"),
        newImg = new Image();

    if (elem.hasAttribute('data-lightbox')) {
        event.preventDefault();

        newImg.onload = function() {
            lightboxImg.src = this.src;
        }

        lightboxImg.src = '';
        newImg.src = elem.getAttribute("data-lightbox");
        lightbox.classList.add("visible");
    }

    if (/*elemID == 'lightbox-image' ||*/ elemID == 'lightbox-overlay') {
        event.preventDefault();

        lightbox.classList.remove("visible");
    }
}
