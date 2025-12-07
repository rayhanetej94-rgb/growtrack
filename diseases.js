// ============================
// Baby Diseases Page Animations
// ============================

// 1️⃣ Fade in Hero and Titles
window.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-2");
    const heroTitle = hero.querySelector("h1");
    const heroText = hero.querySelector("p");

    heroTitle.style.opacity = 0;
    heroText.style.opacity = 0;

    setTimeout(() => {
        heroTitle.style.transition = "opacity 1s ease, transform 1s ease";
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease, transform 1s ease";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 600);
});

// 2️⃣ Animate table rows on hover with color and shadow
const tableRows = document.querySelectorAll(".disease-table tbody tr");

tableRows.forEach(row => {
    row.addEventListener("mouseenter", () => {
        row.style.transition = "all 0.3s ease";
        row.style.backgroundColor = "#8FBC8F"; // light green highlight
        row.style.transform = "scale(1.02)";
        row.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    });
    row.addEventListener("mouseleave", () => {
        row.style.transition = "all 0.3s ease";
        row.style.backgroundColor = "#fff";
        row.style.transform = "scale(1)";
        row.style.boxShadow = "none";
    });
});

// 3️⃣ Randomly highlight a disease every 4 seconds
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * tableRows.length);
    tableRows.forEach((row, i) => {
        if(i === randomIndex) {
            row.style.transition = "all 0.5s ease";
            row.style.backgroundColor = "#556B2F";
            row.style.color = "#fff";
        } else {
            row.style.transition = "all 0.5s ease";
            row.style.backgroundColor = "#fff";
            row.style.color = "#1f2d1f";
        }
    });
}, 4000);

// 4️⃣ Scroll reveal effect for table rows
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + window.innerHeight;
    tableRows.forEach(row => {
        const rowTop = row.getBoundingClientRect().top + window.scrollY;
        if(scrollY > rowTop + 50){
            row.style.opacity = 1;
            row.style.transform = "translateY(0)";
            row.style.transition = "all 0.6s ease";
        } else {
            row.style.opacity = 0;
            row.style.transform = "translateY(30px)";
        }
    });
});

// 5️⃣ Animate header on scroll (slight shrink and color change)
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.transition = "all 0.4s ease";
        header.style.background = "#556B2F";
        header.style.padding = "10px 0";
    } else {
        header.style.transition = "all 0.4s ease";
        header.style.background = "linear-gradient(90deg, #556B2F, #8B4513)";
        header.style.padding = "15px 0";
    }
});

// 6️⃣ Footer subtle pulse animation
const footer = document.querySelector(".footer");
let pulse = 0;
setInterval(() => {
    pulse = (pulse === 0 ? 1 : 0);
    footer.style.transition = "background 1s ease";
    footer.style.background = pulse ? "#8B4513" : "#556B2F";
}, 3000);

// 7️⃣ Animate table header on page load
const tableHeaders = document.querySelectorAll(".disease-table th");
tableHeaders.forEach((th, index) => {
    th.style.opacity = 0;
    th.style.transform = "translateY(-20px)";
    setTimeout(() => {
        th.style.transition = "all 0.8s ease";
        th.style.opacity = 1;
        th.style.transform = "translateY(0)";
    }, index * 150);
});

// 8️⃣ Add click effect to rows
tableRows.forEach(row => {
    row.addEventListener("click", () => {
        row.style.transition = "all 0.3s ease";
        row.style.backgroundColor = "#8B4513";
        row.style.color = "#fff";
        setTimeout(() => {
            row.style.backgroundColor = "#fff";
            row.style.color = "#1f2d1f";
        }, 700);
    });
});
