// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


// Subtle Parallax Effect
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
});