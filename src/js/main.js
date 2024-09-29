// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { Application } from "@splinetool/runtime";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Adding border and box shadow when user scrolls past navbar
// (if it wasn't fixed)
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 150) {
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    navbar.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.borderBottom = "none";
    navbar.style.boxShadow = "none";
  }
});

// Horizontal scroll for skills section
const contents = gsap.utils.toArray(".content");

let scrollTween = gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,
    scrub: 1,
    end: "+=3000",
  },
});

// Scaling the "scroll to see my skills" text
gsap.to(".scroll-text", {
  scale: 2,
  duration: 1,
  opacity: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#vertical",
    start: "top 90%",
    end: "top top",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

// Scaling the "my projects" text
gsap.from("#vertical-projects", {
  scale: 2,
  duration: 1,
  opacity: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#vertical-projects",
    start: "top 90%",
    end: "top top",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

// Scaling the "Website made using" text
gsap.from("#vertical-made", {
  scale: 0.5,
  duration: 1.5,
  opacity: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#vertical-made",
    start: "top bottom",
    end: "top 90%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

// Increasing scale of "Languages" text
gsap.to(".animate-scale", {
  scale: 2,
  duration: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".animate-scale",
    start: "top 90%",
    end: "top top",
    scrub: 1,
    stagger: 2,
  },
});

// Fade down animation for the languages and libraries
const animations = gsap.utils.toArray(".animate-up");

animations.forEach((animation) => {
  gsap.from(animation, {
    y: -130,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: animation,
      containerAnimation: scrollTween,
      start: "left 100%",
      toggleActions: "play none none reverse",
    },
  });
});

// Fade up for all 3 project containers
gsap.from(".projects-container", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".projects-container-2", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".projects-container-2",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".projects-container-3", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".projects-container-3",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
