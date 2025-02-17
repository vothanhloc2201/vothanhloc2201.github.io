//#region product detail
function changeImage(element) {
    document.getElementById('main-image').src = element.src;
}
const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let isDown = false;
    let startX;
    let scrollLeft;

    function checkCardCount() {
        const cards = document.querySelectorAll(".product-card");
        if (cards.length >= 5) {
            prevBtn.style.display = "flex";
            nextBtn.style.display = "flex";
        } else {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    }

    checkCardCount();

    carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        e.preventDefault();
    });

    carousel.addEventListener("mouseleave", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    function scrollCarousel(direction) {
        const scrollAmount = 260;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
//#endregion