const headerImage = document.getElementById('header-image');

function updateImage(params) {
    let mobileSrc = "images/image-header-mobile.jpg";
    let desktopSrc = "images/image-header-desktop.jpg";

    if (screen.innerWidth < 800 ) {
        headerImage.src = mobileSrc;
    } else {
        headerImage.src = desktopSrc;
    }
}

updateImage();

window.addEventListener('resize', updateImage);