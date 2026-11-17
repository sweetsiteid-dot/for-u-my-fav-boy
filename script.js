/* =====================================
   BIRTHDAY SPECIAL
   FROM: ARUM SOVIYA MITA
   TO: NIEL
   THEME: SOFT PINK
===================================== */


/* ELEMENTS */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");


/* OPEN WEBSITE */

if (openBtn) {

    openBtn.addEventListener("click", async () => {

        /* PLAY MUSIC */

        if (music) {
            music.volume = 0.6;

            try {
                await music.play();
            } catch (error) {
                console.log("Music could not autoplay:", error);
            }
        }

        /* FLOWER AND HEART RAIN */

        const decorations = [
            "💗",
            "💕",
            "🌸",
            "🌷",
            "✨",
            "🎀",
            "♡",
            "💖"
        ];

        for (let i = 0; i < 80; i++) {

            const item = document.createElement("div");

            item.innerHTML =
                decorations[
                    Math.floor(Math.random() * decorations.length)
                ];

            item.classList.add("falling");

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.fontSize =
                Math.random() * 18 + 15 + "px";

            item.style.animationDuration =
                Math.random() * 3 + 2 + "s";

            item.style.animationDelay =
                Math.random() * 1.5 + "s";

            document.body.appendChild(item);

            setTimeout(() => {
                item.remove();
            }, 6000);

        }

        /* BUTTON EFFECT */

        openBtn.disabled = true;
        openBtn.innerHTML = "Opening Your Surprise... ♡";

        /* OPENING TRANSITION */

        setTimeout(() => {

            opening.style.transition = "opacity 1s ease";
            opening.style.opacity = "0";

            setTimeout(() => {

                opening.style.display = "none";

                mainContent.style.display = "block";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 1000);

        }, 1500);

    });

}


/* MEMORY BUTTON */

if (memoryBtn) {

    memoryBtn.addEventListener("click", () => {

        const memories = document.getElementById("memories");

        if (memories) {

            memories.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* MUSIC BUTTON */

if (musicBtn && music) {

    musicBtn.addEventListener("click", async () => {

        if (music.paused) {

            try {

                await music.play();

                musicBtn.innerHTML = "⏸ Pause Music";

            } catch (error) {

                musicBtn.innerHTML = "🎵 Play Music";

            }

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

}


/* AUTO SLIDER */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }

}


/* SLIDER INTERVAL */

if (slides.length > 1) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3500);

}


/* CLICK DOT TO CHANGE PHOTO */

dots.forEach((dot, index) => {

    dot.style.cursor = "pointer";

    dot.addEventListener("click", () => {

        if (index < slides.length) {

            currentSlide = index;

            showSlide(currentSlide);

        }

    });

});


/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const icons = [
        "♡",
        "♥",
        "💗",
        "💕",
        "🌸",
        "✨"
    ];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 8 + "s";

    heart.style.opacity =
        Math.random() * 0.5 + 0.3;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);

}


/* CREATE HEARTS AUTOMATICALLY */

setInterval(createHeart, 800);


/* INITIAL SLIDE */

showSlide(0);


/* CONSOLE MESSAGE */

console.log(
    "🎀 Happy Birthday Niel! Made with love by Arum Soviya Mita ♡"
);
