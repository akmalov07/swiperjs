document.addEventListener("DOMContentLoaded", function () {
    const colors = [
        "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
        "linear-gradient(105.54deg, #CCCCCC -2.93%, #F0F0F0 72.14%)",
        "linear-gradient(105.54deg, #7ED87E -2.93%, #BFFFC2 72.14%)",
        "linear-gradient(105.54deg, #F18B7B -2.93%, #FFC2B2 72.14%)"
    ];

    const watchImages = [
        "images/Watches.png",
        "images/Watches (1).png",
        "images/Watches (2).png" ,
        "images/Watches (3).png"
    ];

    let currentIndex = 0;

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const watchImage = document.querySelector(".watch");

    function updateBackground() {
        document.body.style.background = colors[currentIndex];
        watchImage.src = watchImages[currentIndex];
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + colors.length) % colors.length;
        updateBackground();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % colors.length;
        updateBackground();
    });

    // Dastlabki rang va rasmni o‘rnatish
    updateBackground();
});
