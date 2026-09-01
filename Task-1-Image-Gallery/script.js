// ========================================
// IMAGE GALLERY JAVASCRIPT
// ========================================


// Get all gallery elements
const galleryItems = document.querySelectorAll(".gallery-item");

const filterButtons = document.querySelectorAll(".filter-btn");


// Lightbox elements
const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxCaption = document.getElementById("lightboxCaption");

const closeBtn = document.getElementById("closeBtn");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


// Image information
const images = [
    {
        src: "mountain.webp",
        title: "Mountain",
        description: "Beautiful mountain landscape"
    },

    {
        src: "forest.webp",
        title: "Forest",
        description: "Peaceful green forest"
    },

    {
        src: "beach.webp",
        title: "Beach",
        description: "Beautiful sunny beach"
    },

    {
        src: "tiger.webp",
        title: "Tiger",
        description: "Majestic wild tiger"
    },

    {
        src: "elephant.webp",
        title: "Elephant",
        description: "Beautiful elephant"
    },

    {
        src: "dog.webp",
        title: "Dog",
        description: "Friendly pet dog"
    },

    {
        src: "city.webp",
        title: "City",
        description: "Beautiful city view"
    },

    {
        src: "monument.webp",
        title: "Monument",
        description: "Historic monument"
    }
];


// Current image
let currentIndex = 0;


// ========================================
// OPEN LIGHTBOX
// ========================================

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = images[currentIndex].src;

    lightboxImage.alt = images[currentIndex].title;

    lightboxCaption.textContent =
        images[currentIndex].title +
        " - " +
        images[currentIndex].description;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ========================================
// CLOSE LIGHTBOX
// ========================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}


// ========================================
// NEXT IMAGE
// ========================================

function showNextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;

    lightboxImage.alt = images[currentIndex].title;

    lightboxCaption.textContent =
        images[currentIndex].title +
        " - " +
        images[currentIndex].description;
}


// ========================================
// PREVIOUS IMAGE
// ========================================

function showPreviousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

    lightboxImage.alt = images[currentIndex].title;

    lightboxCaption.textContent =
        images[currentIndex].title +
        " - " +
        images[currentIndex].description;
}


// ========================================
// CLICK GALLERY IMAGE
// ========================================

galleryItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const index = parseInt(
            item.getAttribute("data-index")
        );

        openLightbox(index);

    });

});


// ========================================
// BUTTON EVENTS
// ========================================

closeBtn.addEventListener("click", closeLightbox);

nextBtn.addEventListener("click", showNextImage);

prevBtn.addEventListener("click", showPreviousImage);


// ========================================
// CLOSE WHEN CLICKING OUTSIDE IMAGE
// ========================================

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "ArrowLeft") {
        showPreviousImage();
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

});


// ========================================
// IMAGE CATEGORY FILTER
// ========================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        galleryItems.forEach(function(item) {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});
